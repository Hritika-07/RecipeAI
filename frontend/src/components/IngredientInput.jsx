import { useState } from "react";
import api from "../api/api";

function IngredientInput({ setRecipes }) {
  const [ingredients, setIngredients] = useState("");
  const [loading, setLoading] = useState(false);

  const generateRecipes = async () => {
    if (!ingredients.trim()) {
      alert("Please enter some ingredients.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/recipe/suggestions", {
        ingredients,
      });

      setRecipes(response.data.recipes);
    } catch (error) {
      console.error(error);
      alert("Failed to generate recipes.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      generateRecipes();
    }
  };

  return (
    <div className="bg-[var(--surface)] p-8 rounded-3xl shadow">

      <h2 className="text-2xl font-semibold">
        Enter Ingredients
      </h2>

      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Chicken, Onion, Garlic..."
        disabled={loading}
        className="mt-6 w-full px-6 py-4 rounded-2xl border border-[var(--border)] outline-none disabled:opacity-60"
      />

      <button
        onClick={generateRecipes}
        disabled={loading}
        className="mt-6 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-2xl disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        {loading ? (
          <div className="flex items-center gap-3">
            <svg
              className="animate-spin h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="white"
                strokeWidth="3"
                opacity="0.3"
              />
              <path
                d="M22 12a10 10 0 0 1-10 10"
                stroke="white"
                strokeWidth="3"
              />
            </svg>

            Generating...
          </div>
        ) : (
          "Generate Recipes"
        )}
      </button>

    </div>
  );
}

export default IngredientInput;