import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css'
const Nav = () => {
    return(
        <div>
            <ul>
                <NavLink exact to='/'>Home</NavLink>
  
                <NavLink to='/smurf-form'>Add Smurf</NavLink>
            </ul>
        </div>
    );
}

export default Nav;