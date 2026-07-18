from recipe import router as recipe_router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine
from models import Base
from auth import router as auth_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="RecipeAI API",
    version="1.0.0"
)

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(recipe_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to RecipeAI API 🚀"
    }