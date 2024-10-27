import React from 'react'
import {backgroundImgDefault} from '../utilis/images'

const Hero = ({ children, img, disableOverlay }) => {

  const image = img? img : backgroundImgDefault;
  return (

    <div className='hero-img-container'
      style={{
        background: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >

      <div className={`${!disableOverlay ? "hero-overlay" : ""}`}>

        <div className="conatiner hero-container">
          {children}
        </div>
      </div>

    </div>
  )
}

export default Hero