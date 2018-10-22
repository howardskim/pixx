import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/ImageResult';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: '',
            amount: 15,
            api_url: 'https://pixabay.com/api',
            api_key: '10462585-f7f925ed77865d9e110cb6e45',
            image: []
        }
    };
    onTextChange = (event) => {
        let searchTerm = event.target.value;

        if(searchTerm){   
            this.setState({searchText: searchTerm}, async () => {
                const request = await axios.get(`${this.state.api_url}/?key=${this.state.api_key}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}`)
                this.setState({
                    image: request.data.hits
                })
            })
        }
        if (searchTerm === ''){
            this.setState({
                searchText: '',
                image: []
            })
        }
 
    }
    onAmountChange = (event, index, value) => {
        console.log(value);
        this.setState({

            amount: value
        })    
    }
  render() {
    return (
      <div>
        <TextField
            name="searchText"
            value={this.state.searchText}
            onChange = {this.onTextChange}
            floatingLabelText = "Search"
            fullWidth = {true}
        />
        <br />
        <SelectField
            name="amount"
            floatingLabelText="Select"
            value={this.state.amount}
            onChange={this.onAmountChange}
        >
            <MenuItem value={10} primaryText="10" />
            <MenuItem value={20} primaryText="20" />
            <MenuItem value={30} primaryText="30" />
            <MenuItem value={40} primaryText="40" />
            <MenuItem value={50} primaryText="50" />
        </SelectField>

        {this.state.image.length > 0 ? <ImageResults images={this.state.image}/> : ''}
      </div>
    )
  }
}

export default Search;