/* eslint-disable */ 
import {Link } from 'react-router-dom';
import React from 'react';

const navBar = () => {
    return (  
    <div className='navBar'>
         <h1>Math Magician </h1>
        <div className='Link'>
            <Link className='link' to = '/'>Home </Link>
            <span className='sapn'>|</span>
            <Link className='link' to='/Calculators'> Calculator </Link>
            <span className='sapn'>|</span>
            <Link className='link' to='/Quotes'> Quote </Link>
        </div>
    </div> );
}
 
export default navBar;