import React, { useState, useEffect, lazy } from "react";


const images = [
  "https://trucks.tatamotors.com/assets/trucks/files/tata-lpt-signa-2818-1.jpg?VersionId=RW6g0ObDFBJ1xh7PzoIsZc58yBFUhTlt",
  "https://trucks.tatamotors.com/assets/trucks/files/tata-lpt-signa-2818-3.jpg?VersionId=r44k3zR3Ac1yVaI9.RVjsj_h2Rs4tQe_",
  "https://trucks.tatamotors.com/assets/trucks/files/tata-lpt-signa-2818-4.jpg?VersionId=vcYzQwyTTMBlk6kVGThLoRE9Ogc15XY9",
  "https://trucks.tatamotors.com/assets/trucks/files/tata-lpt-signa-2818-5.jpg?VersionId=Uw1aPh4qwbSe9i9fNvgW5isyiR9FxWDe",
  "https://trucks.tatamotors.com/assets/trucks/files/tata-lpt-signa-2818-7.jpg?VersionId=dAYoRu5ValYrPAGSEk7gCBtj0kVX_6W3",
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

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform ease-out duration-500" onLoad={lazy} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 w-6 bg-transparent opacity-0 hover:opacity-100 rounded-full p-1">
        <img src='' alt="arrow" className="rotate-90" />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 w-6 bg-transparent opacity-0 hover:opacity-100 rounded-full p-1 -rotate-90">
        <img src='' alt="arrow" />
      </button>

      {/* Dots Indicator */}
      {/* <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-blue-500" : "bg-gray-400"}`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
