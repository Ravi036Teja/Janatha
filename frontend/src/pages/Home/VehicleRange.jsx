import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import heavyduty from "../../Images/Heavy-4.png";
import smalltrucks from "../../Images/smalltrucks.jpeg";
import heavyduty2 from "../../Images/heavyduty2.jpeg";
import buses from "../../Images/heavy-3.png";

const VehicleRange = () => {
  return (
    <div className="min-h-screen px-4">
      {/* Heading text */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-gray-700 font-serif py-8">
          Vehicle Range
        </h1>
      </div>

      {/* Grid layout with fade-in scroll animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mx-8 md:my-4">
        {[
          { img: heavyduty, label: "Heavy Duty" },
          { img: smalltrucks, label: "Small Trucks" },
          { img: heavyduty2, label: "Light & Medium Duty" },
          { img: buses, label: "Buses" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }} // Start hidden and below position
            whileInView={{ opacity: 1, y: 0 }} // Fade in when in view
            viewport={{ once: false, amount: 0.2 }} // Trigger when 20% visible
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
          >
            <img src={item.img} alt={item.label} className="h-[400px] w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VehicleRange;
