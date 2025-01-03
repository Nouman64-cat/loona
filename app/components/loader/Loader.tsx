import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-6 h-6 bg-gradient-to-r from-peach to-purple rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-gradient-to-r from-peach to-purple rounded-full animate-bounce delay-150"></div>
        <div className="w-6 h-6 bg-gradient-to-r from-peach to-purple rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default Loader;
