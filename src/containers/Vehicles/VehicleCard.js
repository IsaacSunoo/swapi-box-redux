import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../actions';

class VehicleCard extends Component {
    render() {
        const { vehicle_class, name, model, passengers, favorites, id } = this.props;
        const star = (
            <div className="star">
                {!favorites.includes(id) && <i className="fas fa-star" />}
                {favorites.includes(id) && <i className="fas fa-star active-favorite" />}
            </div>
        );
        return (
            <div className='vehicle-card'>
                <h1>{name}</h1>
                <p>Model: {model}</p>
                <p>Class: {vehicle_class}</p>
                <p>Passengers: {passengers}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(VehicleCard);