import React from 'react';
import useFetch from './UseFetch';
import ModalMeal from './ModalMeal';
import useTitle from './useTitle';

const baseUrlAllDetailsById = "https://themealdb.com/api/json/v1/1/lookup.php?i=";


const generatePrice = () => {
    return (Math.random() * (100 - 7) + 7).toFixed(2);
};



const ingredients = (data) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (data[`strIngredient${i}`]) {
            ingredients.push(
                `${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}`
            );
        } else {
            break;
        }
    }
    return ingredients;
};

const Meals = ({ idMeal, strMeal, strMealThumb }) => {

    useTitle(strMeal)


    const { data, loading, error } = useFetch(`${baseUrlAllDetailsById}${idMeal}`);

    if (loading) {
        return <h5 className="loading">Loading...</h5>;
    }


    if (!data || !data.meals || data.meals.length === 0) {
        return <h5 className="error"></h5>;
    }

    const mealIngredients = ingredients(data.meals[0]);

    return (
        <div className="meal-card">
            <img src={strMealThumb} alt={strMeal} className="meal-image" />
            <div className="meal-info">
                <h3>{strMeal}</h3>
                <h4 className="price">&euro; {generatePrice()}</h4>

                {loading && <h5>Loading...</h5>}
                {error && <h5 className="error">Errore - Impossibile caricare i dettagli</h5>}
                {data && data.meals && data.meals.length > 0 && (
                    <ModalMeal
                        strArea={data.meals[0].strArea}
                        strInstructions={data.meals[0].strInstructions}
                        ingredients={mealIngredients}
                    />
                )}

                
      </div>
        </div>
    );
};

export default Meals;
