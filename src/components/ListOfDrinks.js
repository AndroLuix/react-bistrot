import React, { useEffect, useState } from "react";
import useFetch from "./UseFetch";
import { FaSearch } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import { HiClipboardList } from "react-icons/hi";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Cocktails = ({ data }) => {
    const cocktailsPerPage = 8; // Numero massimo di cocktail per pagina
    const [currentPage, setCurrentPage] = useState(1);
    const [activeId, setActiveId] = useState(null); // Stato per memorizzare l'ID attivo

    const {getScrollPosition} = useGlobalContext();

    const history = useNavigate();

    const GoToCocktail = (cocktail) => {
        getScrollPosition(window.pageXOffset);
        history(`/cocktail/${cocktail.idDrink}`);
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
                <div
                    key={drink.idDrink}
                    className="ck-id"
                    onMouseEnter={() => showInfo(drink.idDrink)} // Passa l'ID del cocktail
                    onMouseLeave={hideInfo} // Resetta lo stato
                >
                    <h3>{drink.strDrink}</h3>

                    <div
                        className="img"
                        style={{
                            background: `url(${drink.strDrinkThumb})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >

                        <div
                            className={
                                activeId === drink.idDrink
                                    ? "card-text container show-info" // Mostra solo per l'elemento attivo
                                    : "card-text container"
                            }
                        >
                            <h5>{drink.strInstructionsIT.slice(0, 70)}...</h5>

                            <div className="see-more-btn brand-color d-flex flex-row" 
                            onClick={()=>GoToCocktail(drink)}>
                                <h5>Open</h5>
                                <HiClipboardList className="icon" />
                            </div>
                        </div>
                    </div>
                </div>


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
    const [input, setInput] = useState("margarita");
    const [url, setUrl] = useState(`${baseUrl}${input}`);
    const { data, loading, error } = useFetch(url);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setUrl(`${baseUrl}${input}`);
        }, 500); // Delay per evitare richieste eccessive (debounce)
        return () => clearTimeout(timeout);
    }, [input]);

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
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
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
