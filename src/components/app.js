import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import NavBar from './navbar/NavBar';
import Search from './search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => {
    return (
        <MuiThemeProvider>
            <div>
                <NavBar />
                <Search />
            </div>
        </MuiThemeProvider>
    )
}

export default App;
