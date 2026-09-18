import { ChefHat, Moon, Sun, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Home() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleGetStarted = () => {
    toast("🔐 Login to generate AI recipes.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">

      {/* Navbar */}

      <nav className="flex items-center justify-between px-8 py-6">

        <div className="flex items-center gap-3">

          <div className="bg-violet-600 p-2 rounded-xl shadow-lg">
            <ChefHat className="text-white" size={24} />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              RecipeAI
            </h1>

            <p className="text-sm text-[var(--text-secondary)]">
              AI Powered Cooking
            </p>
          </div>

        </div>

        <div className="flex items-center gap-4">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl hover:bg-[var(--surface)] transition"
            title="Toggle theme"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-xl border hover:bg-violet-600 hover:text-white transition"
          >
            Login
          </button>

        </div>

      </nav>

      {/* Hero */}

      <section className="max-w-5xl mx-auto px-6 pt-16 text-center">

        <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-5 py-2 rounded-full">

          <Sparkles size={18} />

          AI Recipe Generator

        </div>

        <h2 className="mt-8 text-6xl font-extrabold">

          Cook Smarter.

          <br />

          Eat Better.

        </h2>

        <p className="mt-6 text-xl text-[var(--text-secondary)]">

          Enter ingredients you already have and let AI create amazing recipes in seconds.

        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="text"
            placeholder="Chicken, Onion, Cheese..."
            className="w-full md:w-[650px] rounded-2xl border px-6 py-5 outline-none shadow-sm bg-[var(--surface)] text-[var(--text)]"
          />

          <button
            onClick={handleGetStarted}
            className="rounded-2xl bg-violet-600 hover:bg-violet-700 text-white px-8 font-semibold"
          >
            Generate
          </button>

        </div>

      </section>

      {/* Trending */}

      <section className="max-w-5xl mx-auto mt-20 px-6">

        <h3 className="font-semibold text-xl">
          🔥 Trending Recipes
        </h3>

        <div className="flex flex-wrap gap-4 mt-6">

          {[
            "🍝 Pasta",
            "🍕 Pizza",
            "🍛 Biryani",
            "🥗 Salad",
            "🥪 Sandwich",
            "🍜 Noodles",
          ].map((item) => (

            <button
              key={item}
              onClick={handleGetStarted}
              className="px-6 py-3 rounded-full bg-[var(--surface)] border shadow hover:-translate-y-1 hover:bg-violet-600 hover:text-white transition"
            >
              {item}
            </button>

          ))}

        </div>

      </section>

      {/* Footer */}

      <section className="text-center mt-24 pb-10 text-[var(--text-secondary)]">

        Built with ❤️ using React + FastAPI + Groq AI

      </section>

    </div>
  );
}

export default Home;