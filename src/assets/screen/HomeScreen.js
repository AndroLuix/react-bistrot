import React, { useEffect } from 'react'
import Hero from '../../components/Hero'
import { Link } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ListOfDrinks from '../../components/ListOfDrinks';
import { useGlobalContext } from '../../context';
import useTitle from '../../components/useTitle';


const animationData = 'https://lottie.host/44a0dde1-9e45-4734-b434-f39d405d4be9/c3GJCVdJcM.lottie';
const styleHero = {
  width: '80%',
  margin: '0 auto',

  alignItems: 'center',
  justifyContent: 'center',

};



const HomeScreen = () => {

  const {deleteScrollPosition, scrollPosition} = useGlobalContext();

  
useEffect(()=>{
  if(scrollPosition){
    window.scrollTo(0,scrollPosition);
    deleteScrollPosition();
  }
  
  },[scrollPosition, deleteScrollPosition])

  useTitle('Pagina Home')

  
  return (



    <>
      <Hero>
        <div className="home-hero" style={styleHero}
        >
          <div className="home-hero-text">
            <div className="home-hero-title">
              <h2 className="brand-color">
                Bistrot Drink
              </h2>
              <h4>Cerca il tuo cocktail</h4>
            </div>

            <p>
              Qui potrai trovare una intera conoscenza internazionale di drinks a tua disposizione.
Le ricette dei più importanti drink.
            </p>

            <Link to="/about" className="btn btn-primary" >
              Scopri di più
            </Link>

          </div>

          <div className="home-hero-img">

        
            <DotLottieReact
              height={350}
              src={animationData}
              loop
              autoplay
            />
          </div>
        </div>

      </Hero>

      
      <ListOfDrinks />
    </>
  )
}



export default HomeScreen