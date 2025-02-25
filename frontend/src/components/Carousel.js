import React, { useState, useEffect } from "react";
import arrow from "../Images/arrow-down-sign-to-navigate.png";
import { motion, AnimatePresence } from "framer-motion";
// import b1 from '../Images/';
import b2 from '../Images/abt-nature2.jpg';
import b3 from '../Images/abt-nature3.jpg';

const images = [
  'https://www.tatamotors.com/wp-content/uploads/2024/04/pic-cv-range-with-digital-background-1.jpg',
  b2,
  b3,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen max-h-[100vh] overflow-hidden bg-black">
      {/* Image slider with fade-in animation */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${currentIndex}-${new Date().getTime()}`} // Ensure unique key for each render
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 w-8 h-8 bg-gray-100 rounded-full p-1 flex items-center justify-center hover:bg-gray-300"
      >
        <img src={arrow} alt="Previous" className="rotate-90 w-4 h-4" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-8 h-8 bg-gray-100 rounded-full p-1 flex items-center justify-center hover:bg-gray-300"
      >
        <img src={arrow} alt="Next" className="-rotate-90 w-4 h-4" />
      </button> */}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
