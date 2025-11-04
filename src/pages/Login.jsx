import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

export default function Login() {
  const [role, setRole] = useState("farmer");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role}:`, formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <h2 className="text-3xl font-bold text-green-800 mb-6">
        Login as {role.charAt(0).toUpperCase() + role.slice(1)}
      </h2>

      {/* Role Switch Buttons */}
      <div className="flex space-x-3 mb-6">
        {["farmer", "vendor", "transporter"].map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`px-4 py-2 rounded-md font-medium ${
              role === r
                ? "bg-green-700 text-white"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </button>
        ))}
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <label className="block mb-3">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-600 focus:border-green-600"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-600 focus:border-green-600"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
        >
          Login
        </button>
      </form>

      {/* Signup Redirect */}
      <p className="mt-4 text-gray-700">
        Don’t have an account?{" "}
        <Link
          to="/signup"
          className="text-green-700 font-semibold hover:underline"
        >
          Signup
        </Link>
      </p>
    </div>
  );
}
