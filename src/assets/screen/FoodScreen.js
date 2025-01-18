import React, { useEffect, useState } from 'react';
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

    const [meals, setMeals] = useState([]); // Stato per i pasti
    const [filteredMeals, setFilteredMeals] = useState([]); // Stato per i pasti filtrati
    const [page, setPage] = useState(1); // Stato per la paginazione (scroll infinito)
    const [loadingMore, setLoadingMore] = useState(false); // Stato per monitorare il caricamento di più pasti

    // Funzione per caricare nuovi pasti quando si arriva alla fine della lista
    const loadMoreMeals = () => {
        setLoadingMore(true);
        setTimeout(() => {
            setPage((prevPage) => prevPage + 1); // Carica la pagina successiva
            setLoadingMore(false);
        }, 1000);
    };

    // Funzione per filtrare i pasti in base al termine di ricerca
    useEffect(() => {
        if (data && data.meals) {
            setMeals(data.meals);
        }
    }, [data]);

    // Funzione per aggiornare i pasti filtrati in base alla ricerca
    useEffect(() => {
        const filtered = meals.filter((meal) =>
            meal.strMeal.toLowerCase().includes(queryInputMeal.toLowerCase())
        );
        setFilteredMeals(filtered); // Aggiorna i pasti filtrati
    }, [queryInputMeal, meals]);

    // Gestisci l'evento di scroll per il caricamento infinito
    useEffect(() => {
        const handleScroll = () => {
            // Verifica se l'utente è vicino alla fine della pagina
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.scrollHeight - 200
            ) {
                // Se non è già in caricamento, carica più pasti
                if (!loadingMore) {
                    loadMoreMeals();
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup dell'evento al dismount del componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loadingMore]);

    // Calcolare il numero di pasti da mostrare in base alla pagina
    const mealsToShow = filteredMeals.slice(0, page * 10); // Mostra 10 pasti per volta (modifica se necessario)

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
                                onChange={(e) => setQueryInputMeal(e.target.value)} // Imposta lo stato globale della query
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

                {/* Mostra i pasti filtrati con scroll infinito */}
                {mealsToShow.length > 0 ? (
                    mealsToShow.map((meal) => <Meals key={meal.idMeal} {...meal} />)
                ) : (
                    <h2>Nessun pasto trovato</h2>
                )}

                {loadingMore && <h5>Caricando altri pasti...</h5>}
            </div>
        </section>
    );
};

export default FoodScreen;
