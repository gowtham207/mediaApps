import React from "react";
import CustomHeader from "../components/Header";

const AboutScreen = () => {
  return (
    <>    
     <CustomHeader />
    <div className="bg-gray-100 text-gray-800 min-h-screen p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">About Our Platform</h1>
        <p className="text-lg text-gray-600 mt-4">
          Experience endless entertainment with our vast library of movies, shows, and exclusive content.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to bring the world closer through stories. We aim to deliver a seamless streaming experience by curating content that resonates with diverse audiences.
        </p>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={require('../assests/img/moviesList.jpg')}
              alt="Feature 1"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">Extensive Library</h3>
            <p className="text-gray-600">
              Access a wide range of movies, series, and documentaries in multiple genres and languages.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={require('../assests/img/watching.jpg')}
              alt="Feature 2"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">Personalized Experience</h3>
            <p className="text-gray-600">
              Enjoy recommendations crafted specifically for you based on your viewing history.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={require('../assests/img/stream.jpg')}
              alt="Feature 3"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">Seamless Streaming</h3>
            <p className="text-gray-600">
              Watch your favorite content anytime, anywhere on any device.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutScreen;
