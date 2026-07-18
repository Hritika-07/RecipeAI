import toast from "react-hot-toast";
import { useState } from "react";
import { ChefHat, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import api from "../api/api";

function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {

    if (!form.name || !form.email || !form.password) {
      toast.error("Please fill all fields.");
      return;
    }

    try {

      setLoading(true);

      const response = await api.post("/auth/signup", form);

      toast.success(response.data.message);

setTimeout(() => {
  navigate("/login");
}, 1200);

    } catch (error) {

      if (error.response) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Unable to connect to server.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-6">

      <div className="w-full max-w-md bg-[var(--surface)] border border-[var(--border)] rounded-3xl shadow-xl p-8">

        <div className="flex justify-center mb-6">
          <div className="bg-violet-600 p-3 rounded-2xl">
            <ChefHat className="text-white" size={32} />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-center text-[var(--text-secondary)] mt-2">
          Join RecipeAI and start cooking smarter.
        </p>

        <div className="mt-8">
          <label className="font-medium">Full Name</label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full mt-2 border border-[var(--border)] rounded-xl px-4 py-3 outline-none"
          />
        </div>

        <div className="mt-5">
          <label className="font-medium">Email</label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full mt-2 border border-[var(--border)] rounded-xl px-4 py-3 outline-none"
          />
        </div>

        <div className="mt-5">
          <label className="font-medium">Password</label>

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="w-full mt-2 border border-[var(--border)] rounded-xl px-4 py-3 outline-none"
          />
        </div>

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full mt-8 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-60"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="text-center mt-6">
          Already have an account?

          <Link
            to="/login"
            className="text-violet-600 ml-2 font-semibold"
          >
            Login
          </Link>
        </p>

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

export default Signup;