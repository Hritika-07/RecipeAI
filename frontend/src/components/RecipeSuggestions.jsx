import axios from "axios";

function RecipeSuggestions({ recipes, setRecipe }) {

  const generateRecipe = async (recipeName) => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/recipe/generate",
        {
          recipe_name: recipeName,
        }
      );

      setRecipe(response.data.recipe);

    } catch (error) {

      alert("Failed to generate recipe.");

      console.error(error);

    }

  };

  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Suggested Recipes
      </h2>

      {recipes.length === 0 ? (

        <p className="text-[var(--text-secondary)]">
          Generate recipes to see suggestions.
        </p>

      ) : (

        <div className="flex flex-wrap gap-4">

          {recipes.map((recipe, index) => (

            <button
              key={index}
              onClick={() => generateRecipe(recipe)}
              className="px-6 py-3 rounded-full bg-violet-100 text-violet-700 hover:bg-violet-600 hover:text-white transition"
            >
              {recipe}
            </button>

          ))}

        </div>

      )}

    </div>
  );
}

export default RecipeSuggestions;