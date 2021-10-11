import { useState } from "react";
import Recipe from "./components/Recipe";
import RecipeSwitcher from "./components/recipeSwitcher";
import RecipeList from "./assets/recipeList.json";
import mealList from "./assets/mealList.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [chosenRecipe, setChosenRecipe] = useState("");

  const changeRecipe = (event) => setChosenRecipe(event.target.value);

  return (
    <>
      <Navbar />
      <RecipeSwitcher
        chosenRecipe={chosenRecipe}
        changeRecipe={changeRecipe}
        mealList={mealList}
      />
      <Recipe recipe={RecipeList[chosenRecipe]} />
      <Footer />
    </>
  );
}

export default App;
