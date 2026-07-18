import { ChefHat, Moon, Sun, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const name = localStorage.getItem("name");

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");

    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-[var(--border)]">

      <div className="flex items-center gap-3">

        <div className="bg-violet-600 p-2 rounded-xl">
          <ChefHat className="text-white" />
        </div>

        <div>
          <h1 className="text-2xl font-bold">
            RecipeAI
          </h1>

          <p className="text-sm text-[var(--text-secondary)]">
            AI Powered Cooking
          </p>
        </div>

      </div>

      <div className="flex items-center gap-5">

        <p className="font-medium text-[var(--text-secondary)]">
          Hi, <span className="text-violet-600">{name}</span>
        </p>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-xl hover:bg-[var(--surface)] transition"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;