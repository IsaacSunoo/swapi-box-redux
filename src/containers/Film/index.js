import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class Film extends Component {
    constructor() {
        super();
        this.state = {
            randomFilm: []
        }
    }

    componentDidMount() {
        this.fetchMovie();
    }

    fetchMovie = async () => {
        const url = `https://swapi.co/api/films/${this.generateFilm()}`;
        const response = await fetch(url);
        const randomFilm = await response.json();
        this.setState({ randomFilm });
        console.log(this.state.randomFilm);
    }

    generateFilm = () => {
        let randomNum = Math.floor((Math.random() * 7) + 1);
        return randomNum;
    }

    removeAnimation = () => {
        setTimeout(() => <Redirect to='/home' />, 7500);
    }

    render() {
        const { title, release_date, opening_crawl } = this.state.randomFilm;
        return (
            <div className='film-container'>
                <Link className='exit-btn' to='/home'>x</Link>
                <div className='gradient-container'></div>
                <div className='movie-info'>
                    <div className='crawl'>
                        <h1>{title}</h1>
                        <h3>{release_date}</h3>
                        <p className='film-info'>{opening_crawl}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Film;