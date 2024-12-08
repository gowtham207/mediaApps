import React from "react";

const FullPageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-pink-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default FullPageLoader;
