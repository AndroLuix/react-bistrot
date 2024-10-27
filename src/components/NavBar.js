import React from 'react';
import {  FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LinkComponents, SocialComponent } from '../utilis/links';
import { useGlobalContext } from '../context';
import { logoPage } from '../utilis/images';


const NavBar = () => {
  const {openSidebar} = useGlobalContext()
  return (
    <div className='nav'>
      <div className="container nav-container">
        <header className="nav-header ">
          <Link to='/' className='nav-brand'>
            Drink Code 
          </Link>
          <div className="nav-toggler">
            <button className="icon-btn btn nav-toggler" onClick={openSidebar}>
              <FaBars className='nav-icon' /> 
            </button>
          </div>
        </header>

     
      <LinkComponents classlink="nav-links" />
       
      
       <SocialComponent classSocial="socialTop" />
       

      </div>
    </div>
  )
}

export default NavBar