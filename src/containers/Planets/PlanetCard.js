import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../actions';

class PlanetCard extends Component {
    render() {
        const { name, residents, population, climate, terrain, favorites, id } = this.props;
        const star = (
            <div className="star">
                {!favorites.includes(id) && <i className="fas fa-star" />}
                {favorites.includes(id) && <i className="fas fa-star active-favorite" />}
            </div>
        );
        console.log(this.props)
        return (
            <div className='card-container'>
                <div className='planet-card'>
                    <h1>{name}</h1>
                    <p>Climate: {climate}</p>
                    <p>Terrain: {terrain}</p>
                    <p>Population: {population}</p>
                    Residents: {residents.map(resident => {
                        return (<p>{resident}</p>)
                    })}
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

export default connect(mapStateToProps, mapDispatchToProps)(PlanetCard);
