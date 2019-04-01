import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import InfoContainer from '../../components/InfoContainer';

class Favorites extends Component {
  render() {
    return (
      <div>
        <Header />
        <InfoContainer />
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  favorites: state.favorites
})

export default connect(mapStateToProps, null)(Favorites);