// @flow

import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import logo from './logo.svg';
import './App.css';
import Words from './words';

class App extends Component {
  render() {
    return (
      <div className="App">
        { /*
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        */ }
        <Header as='h1' textAlign='center'>normalized-news</Header>
        <Words/>
      </div>
    );
  }
}

export default App;
