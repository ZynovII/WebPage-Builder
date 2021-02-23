import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className='navbar navbar-dark navbar-expand p-0'>
            <header className='container-fluid'>
                <NavLink 
                    className='navbar-brand'
                    to='/'
                >
                    &lt;WebPage Builder/&gt;
                </NavLink>
            </header>
            <ul className='navbar-nav'>
                <li className='nav-item' href='#'>
                    <NavLink 
                        className='nav-link'
                        to='/'
                        exact
                    >
                        About
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        className='nav-link'
                        to='/Constructor'
                    >
                        Constructor
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        className='nav-link'
                        to='/Viewing'
                    >
                        Viewing
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}