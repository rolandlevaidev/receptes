import React from "react";

const RecipeSwitcher = ({ mealList, chosenRecipe, changeRecipe }) => {
  return (
    <div>
      <select value={chosenRecipe} onChange={changeRecipe}>
        <option>Choose a recipe</option>
        {Object.keys(mealList).map((meal) => (
          <option key={meal} value={meal}>
            {mealList[meal]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RecipeSwitcher;
