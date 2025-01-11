import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../components/UseFetch";
import useTitle from "../../components/useTitle";

const SingleCocktailScreen = () => {
  const baseUrl = "https://thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const { id } = useParams(); // Ottieni l'ID dal parametro della rotta.
  const { data, loading, error } = useFetch(`${baseUrl}${id}`);

  
console.log(data);
  // titolo pagina aggiornata 
  useTitle(data && data.drinks[0] ? data.drinks[0].strDrink: "Not Found")
  // Gestione del caricamento.
  if (loading) return <p>Loading...</p>;

  // Gestione degli errori.
  if (error || !data || !data.drinks || data.drinks.length === 0) {
    return <p>Something went wrong. Cocktail not found.</p>;
  }

  const cocktail = data.drinks[0];

 

  return (
    <div className="single-cocktail">
      <h1>{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktail-image" />
      <h5 className="info">{cocktail.strInstructionsIT}</h5>

      <h3>Ingredients:</h3>
      <ul>
        {Object.keys(cocktail)
          .filter((key) => key.startsWith("strIngredient") && cocktail[key]) // Filtra solo gli ingredienti non nulli.
          .map((ingredientKey, index) => (
            <li key={index}>
              {cocktail[ingredientKey]}{" "}
              {cocktail[`strMeasure${ingredientKey.replace("strIngredient", "")}`] && (
                <span>- {cocktail[`strMeasure${ingredientKey.replace("strIngredient", "")}`]}</span>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SingleCocktailScreen;
