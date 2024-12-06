import React, { useState } from "react";
import { LoginApi } from "../api/api";
import { useNavigate } from "react-router";

interface Errors {
  username?: string;
  password?: string;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // State to track the loading status
  const nav = useNavigate()
  const validate = (): Errors => {
    const errors: Errors = {};

    if (!username) {
      errors.username = "Username is required.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setLoading(true); // Start loader

      const userCredentials = {
        username: username,
        password: password,
      };

      try {
        const res = await LoginApi(userCredentials); // API call
        localStorage.setItem("accesstoken", res.token);
        nav('/')
        setMessage("Login successful!");
      } catch (error) {
        setMessage("Login failed. Please try again.");
      } finally {
        setLoading(false); // Stop loader
      }

      console.log(userCredentials); // Log the object to the console
    }
  };

  return (
    <div className="h-screen flex">
      {/* Left Side (optional content) */}
      <div className="w-1/2 bg-gray-100 hidden lg:flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-700">Welcome Back!</h1>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
            Login to Your Account
          </h2>
          {message && (
            <div
              className={`${
                message.includes("successful") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              } p-2 rounded mb-4 text-center`}
            >
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                className={`w-full p-3 border rounded-lg focus:outline-none ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className={`w-full p-3 border rounded-lg focus:outline-none ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition"
              disabled={loading} // Disable the button during loading
            >
              {loading ? "Logging in..." : "Login"} {/* Change button text during loading */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
