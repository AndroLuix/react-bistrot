import React from 'react'
import useTitle from '../../components/useTitle'
import Hero from '../../components/Hero'
import { backgroundMenu } from '../../utilis/images'
import useFetch from '../../components/UseFetch';
import ListOfCategory from '../../components/ListOfCategory';

const urlCategory = "https://www.themealdb.com/api/json/v1/1/categories.php";

const HeroMenu = ({ backgroundMenu }) => {

  return (
    <Hero img={backgroundMenu}>
      <section className="about-hero">
        <div className="about-text">
          <h3>
            <div className="topline"></div>
            <q>
              Ho dei gusti semplicissimi; mi accontento sempre del meglio
            </q>
            <div className="underline"></div>
          </h3>

        </div>
      </section>
    </Hero>
  )
}



const MenuScreen = () => {
  const { data, loading, error } = useFetch(urlCategory);
  console.log(data);

  useTitle('Il nostro Menù')
  return (
    <>


      <HeroMenu backgroundMenu={backgroundMenu} />


      <section className="about-value">
        <div className="container about-value-content">
          <h3 className='brand-secondary-color'>SELEZIONA CATEGORIA</h3>
         
            {loading && <h2>Loading...</h2>}
            {error && <h2>Errore nel caricamento...</h2>}
            <div className='container-menu'>
              {data && data.categories.map((category) => (<ListOfCategory key={category.idCategory} {...category} />))}
            </div>
          </div>
      </section>
    </>

  )
}

export default MenuScreen