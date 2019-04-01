import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../MainPage';
import Film from '../Film';
import People from '../People';
import Vehicles from '../Vehicles';
import Planets from '../Planets';
import Favorites from '../Favorites';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Film} />
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/people" component={People} />
        <Route exact path="/vehicles" component={Vehicles} />
        <Route exact path="/planets" component={Planets} />
        <Route exact path='/favorites' component={Favorites} />
      </div>
    );
  }
}

export default App;
