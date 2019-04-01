import React, { Component } from 'react';
import Header from '../../components/Header';
import InfoContainer from '../../components/InfoContainer';
import PeopleCard from './PeopleCard';

class People extends Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            isLoading: true
        }
    }

    componentDidMount = async () => {
        const url = 'https://swapi.co/api/people/';
        const response = await fetch(url);
        const charactersResponse = await response.json();
        const characters = await this.fetchCharData(charactersResponse.results);
        this.setState({ characters, isLoading: false });
    }

    fetchCharData = (charactersArr) => {
        const unresolvedPromises = charactersArr.map(person => {
            return Promise.all([fetch(person.species[0])
                .then(response => response.json())
                .then(({ name, language }) => ({ name: person.name, language, species: name }))
                , fetch(person.homeworld)
                    .then(response => response.json())
                    .then(({ name, population }) => ({ homeworld: name, homeworldPopulation: population }))
            ])
        })
        return Promise.all(unresolvedPromises)
            .then(response => response.map(character => {
                return Object.assign({}, character[0], character[1])
            }));
    }

  render() {
      const { characters, isLoading } = this.state;

      const displayPeople = characters.map(character => (
          <PeopleCard key={character.name} {...character} />
      ));

      console.log(characters);
    return (
      <div className='people-container'>
          <Header />
          <InfoContainer />
        {
            isLoading ? (<div className='center-image'><img src='https://media2.giphy.com/media/cBQBqW7OJblba/source.gif' className='loading-screen' alt='loading pic'></img></div>) : (< div className='character-card-container' > {displayPeople}</div>)
          }
      </div>
    )
  }
}

export default People;