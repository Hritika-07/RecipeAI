function RecipeCard({ recipe }) {
  if (!recipe) return null;

  const lines = recipe.split("\n");

  return (
    <div className="bg-[var(--surface)] rounded-3xl shadow-xl p-10">

      <h2 className="text-4xl font-bold mb-8">
        🍽 Generated Recipe
      </h2>

      <div className="space-y-3">

        {lines.map((line, index) => {

          const text = line.trim();

          if (!text) return <br key={index} />;

          if (text.startsWith("Recipe Name:")) {
            return (
              <h1
                key={index}
                className="text-3xl font-bold text-violet-600"
              >
                {text.replace("Recipe Name:", "")}
              </h1>
            );
          }

          if (
            text.startsWith("Cooking Time:") ||
            text.startsWith("Difficulty:")
          ) {
            return (
              <p
                key={index}
                className="text-lg font-medium"
              >
                {text}
              </p>
            );
          }

          if (
            text.startsWith("Ingredients:") ||
            text.startsWith("Steps:") ||
            text.startsWith("Chef Tip:")
          ) {
            return (
              <h3
                key={index}
                className="text-2xl font-bold mt-8 text-violet-600"
              >
                {text}
              </h3>
            );
          }

          if (
            text.startsWith("-") ||
            /^[0-9]+\./.test(text)
          ) {
            return (
              <p
                key={index}
                className="ml-6 text-lg"
              >
                {text}
              </p>
            );
          }

          return (
            <p
              key={index}
              className="text-lg leading-8"
            >
              {text}
            </p>
          );

        })}

      </div>

    </div>
  );
}

export default RecipeCard;