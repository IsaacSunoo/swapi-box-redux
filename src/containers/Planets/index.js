import React, { Component } from 'react';
import Header from '../../components/Header';
import InfoContainer from '../../components/InfoContainer';
import PlanetCard from './PlanetCard';

class Planets extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.fetchPlanets();
  }

  fetchPlanets = async () => {
    const url = 'https://swapi.co/api/planets';
    const response = await fetch(url)
    const unresolvedResident = await response.json();
    const planets = await this.fetchResidentsInfo(unresolvedResident.results);
    this.setState({ planets, isLoading: false });
  }

  fetchResidentsInfo = (planetArr) => {
    const unresolvedPromises = planetArr.map(async (planet) => {
      let name = await this.fetchResidentName(planet)
      return { ...planet, residents: name }
    })
    return Promise.all(unresolvedPromises);
  }

  fetchResidentName = (planet) => {
    const residentName = planet.residents.map(async (resident) => {
      const response = await fetch(resident);
      const residentInfo = await response.json();
      return residentInfo.name;
    })
    return Promise.all(residentName);
  }

  render() {
    const { planets, isLoading } = this.state;
    const displayPlanets = planets.map(planet => (
      <PlanetCard key={planet.name} {...planet} />
    ))
    return (
      <div>
        <Header />
        <InfoContainer />
        {
          isLoading ? (<div className='center-image'><img src='https://media2.giphy.com/media/cBQBqW7OJblba/source.gif' alt='loading gif' className='loading-screen'></img></div>) : (<div className='planet-card-container' >{displayPlanets}</div>)
        }
      </div>
    )
  }
}

export default Planets;