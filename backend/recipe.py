from fastapi import APIRouter

from ai_service import (
    generate_recipe_suggestions,
    generate_full_recipe,
)

from schemas import (
    IngredientRequest,
    RecipeRequest,
)

router = APIRouter(
    prefix="/recipe",
    tags=["Recipes"],
)


@router.post("/suggestions")
def suggestions(data: IngredientRequest):

    recipes = generate_recipe_suggestions(
        data.ingredients
    )

    return {
        "recipes": recipes
    }


@router.post("/generate")
def generate(data: RecipeRequest):

    recipe = generate_full_recipe(
        data.recipe_name
    )

    return {
        "recipe": recipe
    }