import React from 'react';
import {  FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {SocialComponent, LinkComponents} from '/utilis/links'


const NavBar = () => {
  return (
    <div className='nav'>
      <div className="container nav-container">
        <header className="nav-header">
          <Link to='/' className='nav-brand'>
            Drink Code
          </Link>
          <div className="nav-toggler">
            <button className="icon-btn btn nav-toggler">
              <FaBars className='nav-icon' />
            </button>
          </div>
        </header>

        <LinkComponents classlink="nav-links" />
        <SocialComponent classlink="socialTop" />

      </div>
    </div>
  )
}

export default NavBar