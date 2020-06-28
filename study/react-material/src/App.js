import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import TypoGraphy from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar';
import NavBar from './navbar';
import Posts from './posts';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              My header
           </TypoGraphy>
           <NavBar />
          </Toolbar>
        </AppBar>
        <Posts />
      </div>
    );
  }
}
export default App;