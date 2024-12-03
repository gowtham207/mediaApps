// PlanScreen.tsx
import React from 'react';
import Header from '../components/CustomHeader';

const PlanScreen: React.FC = () => {
  const plans = [
    { name: 'Basic Plan', description: 'Access to basic content and features.', price: '$5/month' },
    { name: 'Standard Plan', description: 'Access to HD content and features.', price: '$10/month' },
    { name: 'Premium Plan', description: 'Access to 4K content and features with multiple devices.', price: '$15/month' },
    { name: 'Ultimate Plan', description: 'Access to exclusive content and all features.', price: '$25/month' },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header /> {/* Include the Header component */}

      <div className="max-w-screen-xl mx-auto p-6">
        {/* Title */}
        <div className="text-center text-white mb-8">
          <h1 className="text-3xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-lg">Select a plan that suits your needs and enjoy streaming your favorite content!</p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-xl text-white hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
              <p className="text-lg mb-4">{plan.description}</p>
              <p className="text-xl font-semibold mb-6">{plan.price}</p>
              <button
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:bg-gradient-to-l hover:from-indigo-600 hover:to-purple-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanScreen;
