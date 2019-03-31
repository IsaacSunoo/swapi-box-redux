import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../MainPage';
import Film from '../Film';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/home' component={MainPage} />
        <Route exact path='/' component={Film} />
      </div>
    );
  }
}

export default App;
