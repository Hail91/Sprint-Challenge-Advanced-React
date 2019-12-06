import React from 'react'
import AddDarkMode from '../hooks/AddDarkMode';

const NavBar = () => {
    const [ darkMode, setDarkMode ] = AddDarkMode('enabled');
    const toggle = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <a className="nav-link text-dark" href="#">Home</a>
        <i className="fas fa-futbol fa-lg"></i>
        <h5>Women's world cup players ranked by search popularity</h5>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        </ul>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
        <div className="dark-mode__toggle">
            <div
            onClick={toggle}
            className={darkMode ? 'toggle toggled' : 'toggle'}
            />
            </div>    
        </nav>
    )
}

export default NavBar;