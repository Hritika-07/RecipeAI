# 🍳 RecipeAI – AI-Powered Recipe Generator

<div align="center">

![Python](https://img.shields.io/badge/Python-3.10-3776AB?style=for-the-badge&logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.116+-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-ORM-D71F00?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge)
![Groq](https://img.shields.io/badge/Groq-Llama_3.3-F55036?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)

</div>
### 🍽️ Cook Smarter with AI

Generate delicious recipes from ingredients you already have using the power of **Groq Llama 3.3**, **React**, and **FastAPI**.

</div>

---

# 🍽️ About RecipeAI

Ever looked inside your refrigerator and wondered **"What can I cook with these ingredients?"**

RecipeAI answers that question using Artificial Intelligence.

Simply enter the ingredients available in your kitchen, and the application generates multiple recipe ideas. After selecting one, the AI creates a complete recipe including cooking time, difficulty level, ingredients, detailed instructions, and helpful chef tips.

This project combines modern frontend development, backend APIs, authentication, databases, and Generative AI into a clean full-stack application.

---

# 🚀 What Can RecipeAI Do?

## 🔐 Secure Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Dashboard
- Password Hashing

---

## 🤖 AI Recipe Creation

- Generate recipes from available ingredients
- AI-generated recipe suggestions
- Complete cooking instructions
- Estimated cooking time
- Difficulty level
- Chef recommendations

---

## 🥘 Smart Suggestions

- Enter multiple ingredients
- Receive 5 AI recipe suggestions
- Choose your favorite recipe
- Instantly generate a detailed recipe

---

## 🎨 User Experience

- Clean & Modern Interface
- Responsive Layout
- Dark Mode Support
- Interactive Dashboard
- Mobile Friendly

---

## ⚡ Powerful Backend

- FastAPI REST APIs
- SQLite Database
- SQLAlchemy ORM
- Secure JWT Authentication
- Groq API Integration

---

# 🧩 System Design

```text
                    User
                      │
                      ▼
            React + Vite Frontend
                      │
                 Axios Requests
                      │
                      ▼
               FastAPI Backend
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
 JWT Authentication SQLite Database Groq AI
       │                              │
       └──────────────┼───────────────┘
                      ▼
           AI Recipe Generation Engine
```

---

# 🧠 How the AI Works

```text
User enters ingredients
            │
            ▼
React Frontend
            │
            ▼
Axios API Request
            │
            ▼
FastAPI Backend
            │
            ▼
Groq Llama 3.3
            │
            ▼
Recipe Suggestions
            │
User selects one
            │
            ▼
AI Generates Complete Recipe

──────────────────────────────
Recipe Name
Cooking Time
Difficulty
Ingredients
Cooking Steps
Chef Tip
──────────────────────────────
```

---

# 📁 Repository Structure

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
├── .gitignore
└── README.md
```

---

# ⚙️ Getting Started

## Clone the Repository

```bash
git clone https://github.com/Hritika-07/RecipeAI.git

cd RecipeAI
```

---

## Backend Setup

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

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🔐 Configuration

Create a `.env` file inside the **backend** folder.

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY

SECRET_KEY=YOUR_SECRET_KEY

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60
```

---

# 🌐 REST API

| Endpoint | Method | Purpose |
|-----------|--------|---------|
| `/auth/signup` | POST | Register a new user |
| `/auth/login` | POST | Authenticate user |
| `/recipe/suggestions` | POST | Generate AI recipe suggestions |
| `/recipe/generate` | POST | Generate a complete recipe |

---

# 💻 Built With

### Frontend

- React
- Vite
- Axios
- React Router
- CSS

### Backend

- FastAPI
- SQLAlchemy
- SQLite
- JWT Authentication
- Passlib
- Bcrypt

### Artificial Intelligence

- Groq API
- Llama 3.3 70B Versatile

---

# Planned improvements include:

- ❤️ Save favourite recipes
- 📜 Recipe history
- 🥗 Nutrition analysis
- 🎙 Voice input support
- 🌍 Multi-language support
- 📷 Ingredient image recognition
- 🛒 Grocery list generation
- 📄 Export recipes as PDF

---

# Developer

## **Hritika Choudhary**
Python • FastAPI • Streamlit • Artificial Intelligence • Agentic AI • Backend Development

GitHub:
https://github.com/Hritika-07

---

</div>