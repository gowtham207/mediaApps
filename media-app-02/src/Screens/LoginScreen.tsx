import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { LoginApi } from '../api/api';
import Loader from '../components/Loader';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading,setLoading] = useState(false)
  const nav = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error message on each submit attempt
    setError('');

    // Basic validation checks
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }
    setLoading(true)
    LoginApi({
      username: username,
      password: password,
    }).then(res=>{
      setLoading(false)
      localStorage.setItem("accesstoken",res.token)
      nav('/')
    }).catch(err=>{
    setLoading(false)
      console.log(err);
    });
  };

  if(loading){
    return <Loader />
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-600 to-indigo-800">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-white text-center mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Welcome Back
        </h2>

        {error && (
          <div className="mb-4 text-red-500 text-center">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-white font-semibold" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:bg-gradient-to-l hover:from-indigo-600 hover:to-purple-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Log In
          </button>

          <div className="text-center text-white mt-4">
            <p>
              Don't have an account?{' '}
              <a href="#" className="text-purple-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
