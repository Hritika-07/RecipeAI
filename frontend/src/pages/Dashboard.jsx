import { useState } from "react";

import Navbar from "../components/Navbar";
import IngredientInput from "../components/IngredientInput";
import RecipeSuggestions from "../components/RecipeSuggestions";
import RecipeCard from "../components/RecipeCard";

function Dashboard() {
  const name = localStorage.getItem("name");

  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState("");

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold">
          Welcome back,
          <span className="text-violet-600"> {name} 👋</span>
        </h1>

        <p className="mt-4 text-xl text-[var(--text-secondary)]">
          Let's cook something delicious today.
        </p>

        <div className="mt-10">
          <IngredientInput setRecipes={setRecipes} />
        </div>

        <div className="mt-12">
          <RecipeSuggestions
            recipes={recipes}
            setRecipe={setRecipe}
          />
        </div>

        <div className="mt-12">
          <RecipeCard recipe={recipe} />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;