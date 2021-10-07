import React from "react";
import Clock from "./Clock";
import Fire from "./Fire";
import Scale from "./Scale";

function Recipe({ recipe }) {
  if (!recipe) {
    return <h1>Please choose a recipe...</h1>;
  }
  return (
    <>
      <h2 className="font-extrabold text-4xl">{recipe.title}</h2>

      <div>
        <div>
          <img src={recipe.imgSrc} alt={recipe.title} />
        </div>
        <div>
          <div className="flex flex-row">
            <Clock />
            <p>{recipe.time} mins</p>
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
          <h3>Ingredients for {recipe.serving}</h3>
          <ul className="ingredients_list">
            {recipe.ingredientsList.map((ingredient) => (
              <li key={ingredient.trim().toLowerCase()}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="method">
          <h3>Preparation</h3>
          <p>{recipe.description}</p>
        </div>
      </div>
    </>
  );
}

export default Recipe;
