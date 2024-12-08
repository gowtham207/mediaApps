import React, { useState } from "react";
import FullPageLoader from "../components/Loader";
import { LoginApi } from "../api/api";
import { useNavigate } from "react-router";

interface Errors {
  username?: string;
  password?: string;
}

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const nav = useNavigate()
  const validate = (): boolean => {
    const errors: Errors = {};

    if (!username.trim()) {
      errors.username = "Username is required.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log("hello");
      
      setLoading(true);
      if (validate()) {
        // console.log("Form submitted with:", { username, password });
        const res = await LoginApi({username,password})
        localStorage.setItem("accesstoken",res.token)
        nav('/')
        
      }
    } catch (err) {
      console.log("Error", err);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-pink-500 mb-6 text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-pink-300 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className={`w-full p-3 rounded-lg bg-gray-700 text-pink-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                errors.username ? "border-2 border-pink-500" : ""
              }`}
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <p className="text-pink-400 text-sm mt-2">{errors.username}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-pink-300 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full p-3 rounded-lg bg-gray-700 text-pink-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                errors.password ? "border-2 border-pink-500" : ""
              }`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-pink-400 text-sm mt-2">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-pink-500 text-gray-900 font-bold rounded-lg hover:bg-pink-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
