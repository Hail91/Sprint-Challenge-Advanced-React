import React from 'react'
import AddDarkMode from '../hooks/AddDarkMode';

const NavBar = () => {
    const [ darkMode, setDarkMode ] = AddDarkMode('enabled');
    const toggle = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <a class="nav-link text-dark" href="#">Home</a>
        <i class="fas fa-futbol fa-lg"></i>
        <h5>Women's world cup players ranked by search popularity</h5>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
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