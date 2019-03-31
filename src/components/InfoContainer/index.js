import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InfoContainer extends Component {
    render() {
        return (
            <div className='info-container'>
                <section className='button-section'>
                    <Link className='link-design' to='/people'>People</Link>
                    <Link className='link-design' to='/vehicles'>Vehicles</Link>
                    <Link className='link-design' to='/planets'>Planets</Link>
                    <Link className='link-design' to='/favorites'>Favorites</Link>
                    {/* <button type='submit' className='btn-design'>People</button>
                    <button type='submit' className='btn-design'>Vehicles</button>
                    <button type='submit' className='btn-design'>Planets</button>
                    <button type='submit' className='btn-design'>Favorites</button> */}
                </section>
            </div>
        )
    }
}

export default InfoContainer;