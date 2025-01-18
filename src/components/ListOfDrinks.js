import React, { useEffect, useState } from "react";
import useFetch from "./UseFetch";
import { FaSearch } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import { HiClipboardList } from "react-icons/hi";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import Drink from "./Drink";

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Cocktails = ({ data }) => {
    const cocktailsPerPage = 8; // Numero massimo di cocktail per pagina
    const [currentPage, setCurrentPage] = useState(1);
    const [activeId, setActiveId] = useState(null); // Stato per memorizzare l'ID attivo

    const { getScrollPosition } = useGlobalContext();

    const history = useNavigate();


    const GoToCocktail = (idDrink) => {
        getScrollPosition(window.scrollX);
        history(`/cocktail/${idDrink}`);
    }

    // Calcola quali cocktail mostrare
    const startIndex = (currentPage - 1) * cocktailsPerPage;
    const cocktailsToShow = data.drinks.slice(startIndex, startIndex + cocktailsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const showInfo = (id) => {
        setActiveId(id); // Memorizza l'ID del cocktail hoverato
    };

    const hideInfo = () => {
        setActiveId(null); // Resetta lo stato quando il mouse esce
    };

    return (
        <div className="cocktails">
            {cocktailsToShow.map((drink) => (
                <Drink key={drink.idDrink} {...drink}
                    showInfo={showInfo}
                    hideInfo={hideInfo}
                    activeId={activeId}
                    HiClipboardList={HiClipboardList}
                    GoToCocktail={GoToCocktail} />


            ))}

            <Pagination
                count={Math.ceil(data.drinks.length / cocktailsPerPage)} // Numero totale di pagine
                page={currentPage} // Pagina attuale
                onChange={handlePageChange} // Funzione per il cambio di pagina
                color="primary" // Colore dei pulsanti
                sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}
            />
        </div>
    );
};

const ListOfDrinks = () => {


    const { setQueryInput, queryInput } = useGlobalContext();
    const [url, setUrl] = useState(`${baseUrl}${queryInput}`);
    const { data, loading, error } = useFetch(url);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setUrl(`${baseUrl}${queryInput}`);
        }, 500); // Delay per evitare richieste eccessive (debounce)
        return () => clearTimeout(timeout);
    }, [queryInput]);

    return (
        <section className="container home-screen">
            <div className="search-bar">
                <div className="form-container">
                    <form onSubmit={(e) => e.preventDefault()} className="form-drink">
                        <div className="input-search">
                            <input
                                type="text"
                                id="product"
                                className="input"
                                value={queryInput}
                                onChange={(e) => setQueryInput(e.target.value)}
                            />

                            <button className="btn icon-btn" type="submit">
                                <FaSearch className="icon" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="result">
                {loading && <p>Risultati in caricamento...</p>}
                {error && <p>Errore: {error.message}</p>}
                {data && data.drinks && Array.isArray(data.drinks) ? (
                    <Cocktails key={data.drinks[0]?.idDrink} data={data} />
                ) : (
                    <p>Nessun risultato trovato.</p>
                )}
            </div>
        </section>
    );
};

export default ListOfDrinks;
