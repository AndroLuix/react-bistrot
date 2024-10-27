import React from 'react'
import Hero from '../../components/Hero'
import { backgrounfContact } from '../../utilis/images'
import FormContact from '../../components/FormContact'

const ContactScreen = () => {
  return (
    <>
    <Hero  img={backgrounfContact} >
  

        <div className="contact-hero container">
          <div className="contact-hero-text">
            <div className="contact-hero-title">
              <h2 className="contact-title" style={{color:'white'}}>
                INSERISCI LA TUA RICETTA!
              </h2>
              <h4 className="contact-subtitle">
                Il nostro team è sempre disponibile per valutare nuove ricette!
              </h4>
            </div>
          </div>

          <FormContact/>

          {/*end form */}
        </div>
    </Hero>



    </>
  )
}

export default ContactScreen