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
      <h1 className="text-2xl text-center font-bold">Receptes</h1>
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
