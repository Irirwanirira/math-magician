/* eslint-disable */ 
import {Link } from 'react-router-dom';
import React from 'react';

function underlineClickedLink() {
    var links = document.querySelectorAll('a');

    links.forEach(function(link) {
      link.addEventListener('click', function() {
        links.forEach(function(otherLink) {
          otherLink.classList.remove('underline');
        });
        link.classList.add('underline');
      });
    });
}

const NavBar = () => {
    return (  
    <div className='navBar'>
         <h1>Math Magician </h1>
        <div className='Link'>
            <Link className='link' to = '/' onClick={underlineClickedLink}>Home </Link>
            <span className='sapn'>|</span>
            <Link className='link' to='/Calculators'> Calculator </Link>
            <span className='sapn'>|</span>
            <Link className='link' to='/Quotes'> Quote </Link>
        </div>
    </div> );
}
 
export default NavBar;