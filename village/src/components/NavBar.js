import React from 'react';
import { NavLink } from 'react-router-dom';

import styled, { css } from "styled-components";


const Wrapper = styled.div`
    background-color: white;
    padding: 1.5rem 10rem;
    border-bottom: 0.2rem solid gray;
    display: flex;
    justify-content: flex-start;
   
    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    color: #7C7E80;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    padding: 2rem;
    color: #40464F;
  }

  
  .active {
    background-color: #D0DADA;
  }

  logo {
      color: #40464F;
      font-size: 1.8rem;
      padding: 0 8rem;
      font-weight: bolder;
  }
  
`;
const Nav = () => {
    return(
        <Wrapper >
            <logo>Smurf Village</logo>
            <ul>
                <NavLink exact to='/'>Home</NavLink>
  
                <NavLink to='/smurf-form'>Add Smurf</NavLink>
            </ul>
        </Wrapper >
    );
}

export default Nav;