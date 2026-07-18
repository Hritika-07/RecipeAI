import { useState } from "react";
import { ChefHat, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("name", res.data.name);

      toast.success("Login Successful!");

      navigate("/dashboard");
    } catch (err) {
      toast.error(
        err.response?.data?.detail || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-6">
      <div className="w-full max-w-md bg-[var(--surface)] border border-[var(--border)] rounded-3xl shadow-xl p-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-violet-600 p-3 rounded-2xl">
            <ChefHat className="text-white" size={32} />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center">
          Welcome Back 👋
        </h1>

        <p className="text-center text-[var(--text-secondary)] mt-2">
          Login to continue cooking with RecipeAI
        </p>

        <form onSubmit={handleLogin} className="mt-8">

          {/* Email */}
          <div>
            <label className="font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 border border-[var(--border)] rounded-xl px-4 py-3 outline-none bg-transparent"
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 border border-[var(--border)] rounded-xl px-4 py-3 outline-none bg-transparent"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white py-3 rounded-xl font-semibold transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Signup */}
        <p className="text-center mt-6">
          Don't have an account?

          <Link
            to="/signup"
            className="text-violet-600 ml-2 font-semibold"
          >
            Sign Up
          </Link>
        </p>

        {/* Back */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-violet-600 transition"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;