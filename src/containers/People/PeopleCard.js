import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../actions';

class PeopleCard extends Component {

    render() {
        const { name, species, homeworld, homeworldPopulation, language, favorites, id } = this.props;
        const star = (
            <div className="star">
                {!favorites.includes(id) && <i className="fas fa-star" />}
                {favorites.includes(id) && <i className="fas fa-star active-favorite" />}
            </div>
        );

        return (
            <div className='card-container'>
                <div className='character-card'>
                    <h1>{name}</h1>
                    <p>Homeworld: {homeworld}</p>
                    <p>Species: {species}</p>
                    <p>Language: {language}</p>
                    <p>Population: {homeworldPopulation}</p>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    favorites: state.favorites
})

export const mapDispatchToProps = dispatch => ({
    addFavorite: (id) => dispatch(addFavorite(id)),
    removeFavorite: (id) => dispatch(removeFavorite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PeopleCard);