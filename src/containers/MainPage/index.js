import React, { Component } from 'react';
import Header from '../../components/Header';
import InfoContainer from '../../components/InfoContainer';


class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <InfoContainer />
      </div>
    )
  }
}

export default MainPage;