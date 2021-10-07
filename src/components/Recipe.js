import React from "react";
import Clock from "./Clock";
import Fire from "./Fire";
import Scale from "./Scale";

function Recipe({ recipe }) {
  if (!recipe) {
    return <h1>Please choose a recipe... smh....</h1>;
  }
  return (
    <>
      <h2 className="font-extrabold text-4xl">{recipe.title}</h2>

      <div>
        <div>
          <img src={recipe.imgSrc} alt={recipe.title} />
        </div>
        <div className="recipeInfo">
          <div className="recipeInfo">
            <Clock />
            <p>{recipe.time} min</p>
          </div>
          <Scale
            rating={recipe.rating}
            max={5}
            fullIcon={() => <Fire isFull />}
            emptyIcon={() => <Fire isFull={false} />}
          />
        </div>
      </div>

      <div className="recipe">
        <div className="ingredients">
          <h3>Hozzávalók 3 főre</h3>
          <ul className="ingredients_list">
            {recipe.ingredientsList.map((ingredient) => (
              <li key={ingredient.trim().toLowerCase()}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="method">
          <h3>Elkészítés</h3>
          <p>{recipe.description}</p>
        </div>
      </div>
    </>
  );
}

export default Recipe;
