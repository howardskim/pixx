import React, { Component } from 'react'
import propTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';
//icon to click to open up dialog
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class ImageResults extends Component {
   constructor(props){
       super(props);
       this.state = {
           open: false,
           currentImg: ''
       }
   }
   handleOpen = img => {
       this.setState({
           open: true,
           currentImg: img
       })
   }
   handleClose = () => {
       this.setState({
           open: false
       })
   }
  render() {
    let imageListContent;
    const {images} = this.props;
    console.log(images);
    if(images){
        imageListContent = (
            <GridList cols={3}>
                {images.map((image) => {
                    return (
                        <GridTile
                            title={image.tags}

                            key={image.id}
                            subtitle={
                                <span>
                                    by <strong>{image.user}</strong>
                                </span>
                            }
                            actionIcon={
                                <IconButton
                                    onClick={() => {
                                        this.handleOpen(image.largeImageURL)
                                    }}
                                >
                                    <ZoomIn color="white" />
                                </IconButton>
                            }
                        >
                            <img src={image.largeImageURL} />
                        </GridTile>
                    )
                })}
            </GridList>
        )

    } 
    else {
        imageListContent = (
            <h1>Loading</h1>
        );
    }
    const actions = [
        <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ]
    return (
      <div>
        {imageListContent}
        <Dialog 
            actions = {actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
        >
        <img src={this.state.currentImg} style={{width: '100%'}} />
        </Dialog>
      </div>
    )
  }
}

ImageResults.propTypes = {
    images: propTypes.array.isRequired
}

export default ImageResults;