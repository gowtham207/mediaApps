import React from "react";
import CustomHeader from "../components/Header";

const PlanScreen = () => {
  return (
    <>
    <CustomHeader />
    <div className="bg-gray-100 text-gray-800 min-h-screen p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Choose Your Plan</h1>
        <p className="text-lg text-gray-600 mt-4">
          Select a plan that fits your entertainment needs. Cancel anytime.
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic Plan */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Basic</h2>
          <p className="text-center text-gray-600 mb-6">For casual streamers</p>
          <div className="text-center mb-6">
            <span className="text-4xl font-bold">$5</span>
            <span className="text-gray-500 text-sm">/month</span>
          </div>
          <ul className="text-gray-600 mb-6 space-y-4">
            <li>Access to basic content</li>
            <li>720p streaming quality</li>
            <li>1 screen at a time</li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Choose Basic
          </button>
        </div>

        {/* Standard Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-600">
          <h2 className="text-2xl font-bold text-center mb-4">Standard</h2>
          <p className="text-center text-gray-600 mb-6">For everyday viewers</p>
          <div className="text-center mb-6">
            <span className="text-4xl font-bold">$10</span>
            <span className="text-gray-500 text-sm">/month</span>
          </div>
          <ul className="text-gray-600 mb-6 space-y-4">
            <li>Access to all content</li>
            <li>1080p streaming quality</li>
            <li>2 screens at a time</li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Choose Standard
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Premium</h2>
          <p className="text-center text-gray-600 mb-6">For families and enthusiasts</p>
          <div className="text-center mb-6">
            <span className="text-4xl font-bold">$15</span>
            <span className="text-gray-500 text-sm">/month</span>
          </div>
          <ul className="text-gray-600 mb-6 space-y-4">
            <li>Access to all content</li>
            <li>4K UHD streaming quality</li>
            <li>4 screens at a time</li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Choose Premium
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default PlanScreen;
