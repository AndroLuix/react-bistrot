import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context';
import { useParams } from 'react-router-dom';
import useFetch from '../../components/UseFetch';
import Meals from '../../components/Meals';
import { FaSearch } from 'react-icons/fa';

const baseUrl = "https://themealdb.com/api/json/v1/1/filter.php?c=";

const FoodScreen = () => {
    const { category } = useParams(); // Ottieni la categoria dai parametri dell'URL
    const { queryInputMeal, setQueryInputMeal } = useGlobalContext(); // Stato globale per il filtro di ricerca

    // Recupera i dati dei pasti con il custom hook useFetch
    const { data, loading, error } = useFetch(`${baseUrl}${category}`);

    // Funzione per filtrare i pasti in base al termine di ricerca
    const filteredMeals = data?.meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(queryInputMeal.toLowerCase())
    );


   

    return (
        <section className="container home-screen">
            <h2 className="title centralize">{category}</h2>
            <div className="search-bar">
                <div className="form-container">
                    <form onSubmit={(e) => e.preventDefault()} className="form-drink">
                        <div className="input-search">
                            <input
                                type="text"
                                id="product"
                                className="input"
                                value={queryInputMeal}
                                onChange={(e) => setQueryInputMeal(e.target.value)}
                            />

                            <button className="btn icon-btn" type="submit">
                                <FaSearch className="icon" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>





            {/* Contenitore dei pasti */}
            <div className="meals-container">
                {loading && <h2>Loading...</h2>}
                {error && <h2>Errore nel caricamento...</h2>}

                {/* Mostra i pasti filtrati */}
                {filteredMeals && filteredMeals.length > 0 ? (
                    filteredMeals.map((meal) => <Meals key={meal.idMeal} {...meal} />)
                ) : (""
                  
                )}
            </div>
        </section>
    );
};

export default FoodScreen;
