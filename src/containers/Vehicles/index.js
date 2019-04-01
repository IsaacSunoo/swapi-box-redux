import React, { Component } from 'react';
import Header from '../../components/Header';
import InfoContainer from '../../components/InfoContainer';
import VehicleCard from './VehicleCard';

class Vehicles extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.fetchVehicles();
  }

  fetchVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles';
    const response = await fetch(url);
    const vehiclesResponse = await response.json();
    this.setState({ vehicles: vehiclesResponse.results, isLoading: false });
  }

  render() {
    const { vehicles, isLoading } = this.state;
    const displayVehicles = vehicles.map(vehicle => (
      <VehicleCard key={vehicle.name} {...vehicle} />
    ))

    return (
      <div>
        <Header />
        <InfoContainer />
        {
          isLoading ? (<div className='center-image'><img src='https://media2.giphy.com/media/cBQBqW7OJblba/source.gif' className='loading-screen' alt='loading pic'></img></div>) : (< div className='vehicle-card-container' > {displayVehicles}</div>)
        }
      </div>
    )
  }
}

export default Vehicles;