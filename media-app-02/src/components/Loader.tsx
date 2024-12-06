import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-12 h-12 border-4 border-t-transparent border-slate-100 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-gray-100">Loading...</p>
    </div>
  );
};

export default Loader;
