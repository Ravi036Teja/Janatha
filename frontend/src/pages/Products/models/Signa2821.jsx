// Signa2821.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Carousel from './Signa2823/Slider';
import engine from '../../../Icons/engineering.png';
import fuel from '../../../Icons/fuel.png';
import warrenty from '../../../Icons/warranty.png';
import speed from '../../../Icons/speed-meter.png';
import tyres from '../../../Icons/tyre.png';
import staring from '../../../Icons/engine.png';

// Reusable scroll animation wrapper
const ScrollAnimationWrapper = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Animation triggers when 20% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 }); // Reset animation when out of view
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Signa2821 = () => {
  return (
    <div className="min-h-screen mt-16 md:mt-28 mx-4 md:mx-20">
      {/* Header Section */}
      <ScrollAnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Content */}
          <div className="pt-4 md:pt-16">
            <h1 className="text-center md:text-left text-2xl md:text-5xl font-bold text-[#0B389D]">
              TATA SIGNA 2821.T
            </h1>
            <p className="text-gray-500 text-sm md:text-xl pt-4 md:pt-8 lg:pr-8">
              The Tata Signa 2821.T is a 10-wheeler heavy-duty cargo truck from Tata Motors, featuring a 5-liter Turbotronn engine, designed for long-haul transportation with a focus on driver comfort and fuel efficiency, boasting a Gross Vehicle Weight (GVW) of 28 tons and a payload capacity of around 20,000 kgs; it is known for its modern Signa cabin design, comfortable interior, and reliable performance with a 6-speed gearbox; considered a competitive option in the 28-ton truck category.
            </p>
            <ul className="flex flex-wrap justify-between gap-4 pt-4 md:pt-8">
              <li className="text-sm md:text-base">
                28000 Kg <br />
                <span className="text-gray-500">GVW</span>
              </li>
              <li className="text-sm md:text-base">
                150 kW (204Ps @ 2200 r/min) <br />
                <span className="text-gray-500">Power</span>
              </li>
              <li className="text-sm md:text-base">
                Turbotronn 5L <br />
                <span className="text-gray-500">Engine</span>
              </li>
              <li className="text-sm md:text-base">
                NA <br />
                <span className="text-gray-500">Deck Length</span>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/SIGNA-2821T.jpg?VersionId=m4W678YGrqA_jDVetNzxtdrGBV9rOp16"
              alt="TATA Signa 2821"
              className="w-full h-auto max-w-md md:max-w-full rounded-lg"
            />
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Features Section */}
      <ScrollAnimationWrapper>
        <div className="w-full h-auto bg-[#f2f2f2] shadow-lg rounded-lg mt-12 p-4 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { img: engine, label: 'Engine', desc: 'Turbotronn 2.0' },
              { img: fuel, label: 'Fuel Tank', desc: 'Diesel' },
              { img: warrenty, label: 'Warranty', desc: '6Y6L on Driveline' },
              { img: speed, label: 'Torque', desc: '850 Nm@1000-1600 RPM' },
              { img: tyres, label: 'Tyres', desc: '295/90R20' },
              { img: staring, label: 'Applications', desc: 'Industrial Goods' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={item.img} alt={item.label} className="w-12 md:w-16" />
                <h1 className="text-sm md:text-base font-semibold">{item.label}</h1>
                <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Specifications Section */}
      <ScrollAnimationWrapper>
        <div className="py-12">
          <h1 className="text-2xl md:text-5xl font-bold text-center">Specification</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-8 md:pt-16 gap-8">
            {/* Carousel Section */}
            <div className="rounded-lg">
              <Carousel />
            </div>

            {/* Specification List */}
            <div>
              {[
                ['Max Power', '169 KW @2300 RPM'],
                ['Max Torque', '925 Nm @1000-1600 RPM'],
                ['Emission Norms', 'BS6 OBD II'],
                ['Engine Type', 'Cummins 5.6L'],
                ['Engine Cylinders', '6 Cylinders'],
                ['Gradeability (%)', 'NA'],
                ['Fuel Tank Capacity (Litres)', '365 Litres'],
                ['Fuel Type', 'Diesel'],
                ['Clutch Type', 'Dry, Single Plate'],
                ['Gearbox', 'SDL G950 6S & LDL G750 6S'],
              ].map(([label, value], index) => (
                <ul
                  key={index}
                  className="grid grid-cols-2 border-b pb-2 text-sm md:text-base"
                >
                  <li className="font-semibold">{label}</li>
                  <li>{value}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Signa2821;
