import React from 'react'

const Drink = ({ idDrink, strDrink, strDrinkThumb, strInstructionsIT, activeId, showInfo, HiClipboardList, hideInfo, GoToCocktail }) => {
    return (
        <div
            key={idDrink}
            className="ck-id"
            onMouseEnter={() => showInfo(idDrink)} // Passa l'ID del cocktail
            onMouseLeave={hideInfo} // Resetta lo stato
        >
            <h3>{strDrink}</h3>

            <div
                className="img"
                style={{
                    background: `url(${strDrinkThumb})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >

                <div
                    className={
                        activeId === idDrink
                            ? "card-text container show-info" // Mostra solo per l'elemento attivo
                            : "card-text container"
                    }
                >
                    <h5>{strInstructionsIT.slice(0, 70)}...</h5>

                    <div className="see-more-btn brand-color d-flex flex-row"
                        onClick={() => GoToCocktail(idDrink)}>
                        <h5>Open</h5>
                        <HiClipboardList className="icon" />
                    </div>
                </div>
            </div>
        </div>
                 
  )
}

export default Drink