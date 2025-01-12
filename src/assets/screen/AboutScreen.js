import React from 'react'
import Hero from '../../components/Hero'
import { backgroundAbout, backgroundTeam } from '../../utilis/images'
import { ProjectCards, teamCards } from '../../utilis/info'
import Card from '../../components/Card'
import useTitle from '../../components/useTitle'

const AboutScreen = () => {
  
  useTitle('Su di noi ')
  return (
    <>
      <Hero img={backgroundAbout}>
        <section className="about-hero">
          <div className="about-text">
            <h3>
              <div className="topline"></div>
            <q>
              Grande è la fortuna di colui che possiede una buona 
              bottiglia di vino, un buon libro, e un buon amico
            </q>
            <div className="underline"></div>
            </h3>
           
            </div>
        </section>
      </Hero>

      <section className="about-value">
        <div className="container about-value-content">
          <h3 className='brand-secondary-color'>IL NOSTRO PROGETTO</h3>
          <div className="card-section">
          {
          ProjectCards.map((project)=>{
            return <Card key={project.title} {...project} className={'value-card'}/>
          })
          }
          </div>
        </div>
      </section>

     <section className="team-about container">
      <h3 style={{textAlign:'center', marginBottom:'10px'}}>IL NOSTRO TEAM</h3>
      <Hero img={backgroundTeam} >
      </Hero>

      <div className="card-section">
          {
          teamCards.map((person)=>{
            return <Card key={person.name} {...person} className={'value-card'}/>
          })
          }
          </div>

      
     </section>
    </>
  )
}

export default AboutScreen