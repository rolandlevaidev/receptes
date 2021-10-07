import { useState } from "react";
import Recipe from "./components/Recipe";
import RecipeSwitcher from "./components/recipeSwitcher";
import RecipeList from "./assets/recipeList.json";
import mealList from "./assets/mealList.json";

function App() {
  const [chosenRecipe, setChosenRecipe] = useState("");

  const changeRecipe = (event) => setChosenRecipe(event.target.value);

  return (
    <>
      <RecipeSwitcher
        chosenRecipe={chosenRecipe}
        changeRecipe={changeRecipe}
        mealList={mealList}
      />
      <Recipe recipe={RecipeList[chosenRecipe]} />
    </>
  );
}

export default App;
