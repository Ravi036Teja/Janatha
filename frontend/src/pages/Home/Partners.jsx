import React from "react";
import wabco from "../../Images/Wabco.jpg";
import turbo from "../../Images/Turbo.jpg";
import rane from "../../Images/Rane.jpg";
import battery from "../../Images/batteries.jpg";

const Partners = () => {
  return (
    <div className="py-12 bg-white/30 backdrop-blur-sm backdrop-blur-xs">
      {/* Section Title */}
      <div className="px-4 sm:px-8 md:px-20 space-y-4 ">
        <h1 className="pt-8 py-4 text-3xl font-serif text-center">
          Our Partners
        </h1>
      </div>

      {/* Partner Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20 cursor-pointer mx-4 sm:mx-12 mt-8 place-items-center">
        <img src={wabco} alt="Wabco" className="w-24 sm:w-32 md:w-18" />
        <img src={rane} alt="Rane" className="w-24 sm:w-32 md:w-18" />
        <img src={turbo} alt="Turbo" className="w-16 sm:w-24 md:w-14" />
        <img src={battery} alt="Battery" className="w-20 sm:w-28 md:w-18" />
      </div>
    </div>
  );
};

export default Partners;
