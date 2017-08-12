// @flow

import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';

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
        <Segment inverted color='violet'>
          <Header
            inverted
            as='h1'
            textAlign='center'
            style={{ marginBottom: '1.5em', marginTop: '1.5em' }}
          >
            normalized-news
          </Header>
        </Segment>
        <Words/>
      </div>
    );
  }
}

export default App;
