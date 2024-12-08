import React, { useState } from "react";
import AnimatedHeader from "../components/Header";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000); // Simulate network delay
  };

  return (
    <div className="min-h-screen bg-gray-900 text-pink-300">
      {/* Header */}
     <AnimatedHeader />

      {/* Contact Form */}
      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-500 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-300">
            We'd love to hear from you! Please fill out the form below to get in touch with us.
          </p>
        </section>

        <section className="bg-gray-800 rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg text-pink-500 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-gray-700 text-pink-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg text-pink-500 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-gray-700 text-pink-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg text-pink-500 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-gray-700 text-pink-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Write your message here"
                rows={5}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 rounded-md text-white ${isSubmitting ? 'bg-gray-600' : 'bg-pink-500 hover:bg-pink-600'} transition`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Form Status */}
          {formStatus && (
            <div className="mt-6 text-center text-green-500 font-semibold">
              {formStatus}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300">&copy; 2024 My OTT Platform. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
