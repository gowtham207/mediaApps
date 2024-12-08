import React from "react";
import AnimatedHeader from "../components/Header";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-pink-300">
      {/* Header */}
     <AnimatedHeader />

      {/* About Section */}
      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-500 mb-4">About Our Platform</h2>
          <p className="text-xl text-gray-300">
            Welcome to My OTT Platform, your ultimate destination for premium
            movies, TV shows, and exclusive content! Watch anywhere, anytime,
            and connect with fellow entertainment lovers.
          </p>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">High-Quality Streaming</h3>
            <p className="text-gray-300">
              Enjoy movies and shows in 4K, Full HD, or HD resolution. Watch in
              the best possible quality with minimal buffering.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">Wide Variety of Content</h3>
            <p className="text-gray-300">
              Our library includes thousands of movies, TV series, documentaries,
              and exclusive originals. There's always something new to watch.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">Social Interaction</h3>
            <p className="text-gray-300">
              Share your reviews, comment on your favorite shows, and engage with
              other users in real-time, making the viewing experience more fun.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-pink-500 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-300">
            We aim to bring entertainment to your fingertips with a seamless
            experience, offering the best in movies, TV shows, and more. We
            believe in providing high-quality content to all users, with features
            that allow easy access to what matters most – entertainment.
          </p>
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

export default AboutPage;
