import React from "react";
import "./Aurora.css";

const AuroraBackground = ({ onTitleClick }) => {
  return (
    <div className="mt-6 relative w-full h-screen overflow-hidden bg-gradient-to-b from-white to-blue-200">
      <div className="aurora absolute top-0 left-0 w-full h-full opacity-60"></div>
      <div className="flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-blue-900 cursor-pointer"
          onClick={onTitleClick}
        >
          JAPL GROUP
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Since 2018</p>
      </div>
    </div>
  );
};

export default AuroraBackground;