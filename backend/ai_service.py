import os

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_recipe_suggestions(ingredients: str):

    prompt = f"""
You are RecipeAI.

The user has these ingredients:

{ingredients}

TASK:

Suggest EXACTLY 5 recipes.

Rules:

- Only recipe names.
- No numbering.
- One recipe per line.
- Don't explain anything.

If the user asks something unrelated to cooking,
reply EXACTLY:

I'm RecipeAI 👨‍🍳.
I can only help with recipes and cooking.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are a professional chef."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.7,
    )

    text = response.choices[0].message.content.strip()

    return text.split("\n")


def generate_full_recipe(recipe_name: str):

    prompt = f"""
You are RecipeAI.

Generate a professional recipe for:

{recipe_name}

Return in EXACTLY this format:

Recipe Name:
Cooking Time:
Difficulty:

Ingredients:
- ...

Steps:
1.
2.
3.

Chef Tip:
...

Do NOT answer anything except the recipe.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are a world class chef."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.6,
    )

    return response.choices[0].message.content