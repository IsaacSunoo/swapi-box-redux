import React, { Component } from 'react';

class People extends Component {
    constructor() {
        super();
        this.state = {
            characters: []
        }
    }

    componentDidMount = async () => {
        const url = 'https://swapi.co/api/people/';
        const response = await fetch(url);
        const charactersResponse = await response.json();
        const characters = await this.fetchCharData(charactersResponse.results);
        this.setState({ characters });
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
      const { characters } = this.state;
      console.log(characters);
    return (
      <div>

      </div>
    )
  }
}

export default People;