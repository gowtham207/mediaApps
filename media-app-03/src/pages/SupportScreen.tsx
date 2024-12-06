import React, { useState } from "react";
import Header from "../components/Header";

const SupportScreen: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Support request submitted successfully!");
    }, 2000);
  };

  return (
    <div className="bg-gray-50">
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Support</h2>
        <p className="text-center text-gray-600 mb-6">
          If you need help, please fill out the form below, and we'll get back to you as soon as possible.
        </p>

        <div className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-lg focus:outline-none border-gray-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-lg focus:outline-none border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border rounded-lg focus:outline-none border-gray-300"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your issue"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportScreen;
