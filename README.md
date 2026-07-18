# 🍳 RecipeAI – AI-Powered Recipe Generator

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.116+-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-ORM-D71F00?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge)
![Groq](https://img.shields.io/badge/Groq-Llama_3.3-purple?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)

### 🧠 Generate Delicious Recipes From Ingredients You Already Have

RecipeAI is a modern full-stack AI web application that transforms everyday ingredients into complete recipes using **Groq Llama 3.3**, featuring secure authentication, AI-powered recipe suggestions, and a beautiful responsive interface.

</div>

---

# 🌟 Overview

RecipeAI helps users discover creative recipes based on ingredients already available in their kitchen.

Instead of manually searching recipe websites, users simply enter ingredients, receive multiple AI-generated recipe suggestions, and instantly generate a complete recipe including:

- Recipe Name
- Cooking Time
- Difficulty
- Ingredients
- Step-by-step Instructions
- Chef Tips

The project demonstrates modern full-stack development by combining **React**, **FastAPI**, **JWT Authentication**, **SQLite**, **SQLAlchemy**, and **Generative AI** into a production-style application.

---

# ✨ Features

## 🔐 Authentication

- User Signup
- User Login
- JWT Authentication
- Protected Routes
- Secure Password Hashing

---

## 🤖 AI Recipe Generator

- Generate recipes from available ingredients
- AI-powered recipe suggestions
- Complete cooking instructions
- Cooking time estimation
- Difficulty level
- Chef recommendations

---

## 🍽️ Smart Suggestions

- Enter multiple ingredients
- AI generates 5 recipe suggestions
- Click any suggestion
- Instantly generate a complete recipe

---

## 🎨 User Interface

- Modern Responsive Design
- Dark Mode
- Beautiful Landing Page
- Interactive Dashboard
- Mobile Friendly

---

## ⚡ Backend

- FastAPI REST API
- SQLite Database
- SQLAlchemy ORM
- JWT Authentication
- Groq API Integration

---

# 🏗️ System Architecture

```text
                     User
                       │
                       ▼
             React + Vite Frontend
                       │
                  Axios API Calls
                       │
                       ▼
               FastAPI Backend
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
 JWT Authentication  SQLite DB    Groq AI
        │                              │
        └──────────────┼───────────────┘
                       ▼
            AI Recipe Generation Engine
```

---

# 🤖 AI Workflow

```text
User enters ingredients
            │
            ▼
React Frontend
            │
            ▼
Axios Request
            │
            ▼
FastAPI Backend
            │
            ▼
Groq Llama 3.3
            │
            ▼
5 Recipe Suggestions
            │
User selects one
            │
            ▼
Complete Recipe Generated
────────────────────────────────
Recipe Name
Cooking Time
Difficulty
Ingredients
Steps
Chef Tip
────────────────────────────────
```

---

# 📂 Project Structure

```text
RecipeAI
│
├── backend
│   ├── ai_service.py
│   ├── auth.py
│   ├── database.py
│   ├── main.py
│   ├── models.py
│   ├── recipe.py
│   ├── schemas.py
│   ├── requirements.txt
│   └── .env
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── api
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── screenshots
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Hritika-07/RecipeAI.git

cd RecipeAI
```

---

## Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux/macOS
source venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY

SECRET_KEY=YOUR_SECRET_KEY

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60
```


---

# 🔌 API Endpoints

| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/auth/signup` | POST | Register User |
| `/auth/login` | POST | Login User |
| `/recipe/suggestions` | POST | Generate Recipe Suggestions |
| `/recipe/generate` | POST | Generate Complete Recipe |

---

# 📸 Application Preview

"screenshots\Screenshot.png"


---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Axios
- React Router
- CSS

## Backend

- FastAPI
- SQLAlchemy
- SQLite
- JWT Authentication
- Bcrypt

## AI

- Groq API
- Llama 3.3 70B Versatile

---

# 🚀 Future Improvements

-  Save Favorite Recipes
-  Recipe History
-  Nutrition Analysis
-  Multi-language Support
-  Voice Input
-  Ingredient Image Recognition
-  Grocery List Generator
-  Export Recipes as PDF

---

# 👩‍💻 Developer

**Hritika Choudhary**

💻 Full Stack Developer • AI Enthusiast

GitHub:
https://github.com/Hritika-07

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

### ⭐ If you liked this project, consider giving it a Star!

Made with ❤️ using React, FastAPI & Generative AI.

</div>