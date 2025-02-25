import React, { useState } from 'react';

const FlexAccordion = ({ items }) => {
  // Set the first item active by default; adjust as needed
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="mx-20 bg-white shadow rounded-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left side: Headings */}
        <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`w-full text-left px-4 py-3 border-b border-gray-200 hover:bg-gray-100 focus:outline-none transition-colors ${
                activeIndex === index ? 'bg-gray-100 font-bold' : ''
              }`}
            >
              {item.heading}
            </button>
          ))}
        </div>

        {/* Right side: Active Content */}
        <div className="md:w-2/3 p-4">
          {items[activeIndex] && items[activeIndex].content}
        </div>
      </div>
    </div>
  );
};

export default FlexAccordion;
