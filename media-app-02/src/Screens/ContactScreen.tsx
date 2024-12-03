import React, { useState } from 'react';
import Header from '../components/CustomHeader';

const ContactScreen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // You can replace the above log with an API call to send form data
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header /> {/* Include the Header component */}

      <div className="max-w-screen-xl mx-auto p-6">
        <div className="text-center text-white mb-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">We'd love to hear from you! If you have any questions or feedback, feel free to get in touch.</p>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-800 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="text-white font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-white font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="text-white font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your message"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:bg-gradient-to-l hover:from-indigo-600 hover:to-purple-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* OTT Store Details */}
        <div className="text-white mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">About Our Online OTT Store</h2>
          <p className="text-lg">
            Welcome to the most dynamic Online OTT Store, where you can discover and stream your favorite movies, TV shows, and original content. We offer a wide variety of genres, from thrilling action to heartwarming dramas. Join us today and experience entertainment like never before!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
