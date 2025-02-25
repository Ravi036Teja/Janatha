import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

const Gallary = () => {
  return (
    <div className="min-h-screen">

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-gray-700 font-serif py-4 md:pb-12">
        Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 gap-4">
        {[
          "https://trucks.tatamotors.com/assets/trucks/files/K.14.jpg",
          "https://i.pinimg.com/736x/06/66/f1/0666f1c1b6338544aeeb7c5c8b996395.jpg",
          "https://trucks.tatamotors.com/assets/trucks/files/t.19.jpg",
          "https://trucks.tatamotors.com/assets/trucks/files/Prima-5530_0.jpg?VersionId=n.59I7mYBYj1WNRobfYxI0HUFO8PT7UA",
          "https://trucks.tatamotors.com/assets/trucks/files/Signa-1923.K.-leaflet_CTC-%281%29.jpg?VersionId=9VXnP52CBu5snnO7.TAWRCBWv46x8Bkx",
          "https://trucks.tatamotors.com/assets/trucks/files/Signa%202823T%20Back.jpg",
        ].map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }} // Start hidden & slightly smaller
            whileInView={{ opacity: 1, scale: 1 }} // Pop up when in view
            viewport={{ once: false, amount: 0.2 }} // Animate every time it scrolls into view
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          >
            <img
              src={src}
              alt=""
              className="h-[250px] w-full object-cover transition-transform duration-300 hover:scale-90"
            />
          </motion.div>
        ))}
      </div>

       {/* Banner Image */}
       <div className="mx-8 py-4">
        <img
          src="https://trucks.tatamotors.com/assets/trucks/files/cat-banner/2024-11/tata-signa-bnr_0.jpg?VersionId=wEhrhoIffDmgFNva4GnwRKYa6lqZObBS"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Gallary;
