import React from 'react'
import { SocialComponent } from '../utilis/links'

const Footer = () => {
  return (
    
    <footer className="footer">
      
      <div className="container footer-container">
        <h5 className="footer-text">
          
          all &copy; reserved to
          <span className='brand-color'>
            <a href="https://iadicola.netsons.org/"> Tech CraftCode </a>
          </span>
        </h5>
       
      </div>

     {/*  <div className="container " style={{color:'white'}}>
          <SocialComponent classSocial='d-flex flex-row'  />
        </div> */}

    </footer>
  )
}

export default Footer