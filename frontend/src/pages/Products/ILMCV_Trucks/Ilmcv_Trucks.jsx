import React from "react";
import h5 from "../../../pdf/4830.pdf";

const Ilmcv = () => {
  return (
    <div className="mt-16 mx-2 min-h-screen" id="ilmcv">
      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-blue-900 font-serif pb-4">
        ILMCV Trucks
      </h1>

      {/* LCV Section */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 font-serif pb-4">
        LCV
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Truck 1 */}
        <div className="border rounded-lg p-4 shadow-sm">
          <img
            src="https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/ultra-t6.png?VersionId=9mmbFoXFbfaKW6CppE0BMszLu7VExdp9"
            alt="TATA ULTRA T.6"
            className="w-full object-contain"
          />
          <h1 className="text-lg sm:text-xl font-semibold text-center text-blue-950 mt-4">
            TATA ULTRA T.6
          </h1>
          <ul className="flex justify-between text-xs sm:text-sm pt-4 px-2">
            <li>
              6950 Kg <br />
              <span className="text-gray-500">Tonnage (GVW)</span>
            </li>
            <li>
              60L <br />
              <span className="text-gray-500">Fuel tank capacity</span>
            </li>
            <li>
              35 <br />
              <span className="text-gray-500">Gradeability %</span>
            </li>
          </ul>
          <div className="flex gap-2 pt-4">
            <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded">
              Know More
            </button>
            <a
              href={h5}
              className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Broucher
            </a>
          </div>
        </div>

        {/* Additional Trucks (copy similar structure for each) */}
        <div className="border rounded-lg p-4 shadow-sm">
          <img
            src="https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/LPT-709-G.jpg?VersionId=A2525FfwdgyLXavl7BMqo0Cdm96AlO4U"
            alt="TATA LPT 710"
            className="w-full object-contain"
          />
          <h1 className="text-lg sm:text-xl font-semibold text-center text-blue-950 mt-4">
            TATA LPT 710
          </h1>
          <ul className="flex justify-between text-xs sm:text-sm pt-4 px-2">
            <li>
              7300 Kg <br />
              <span className="text-gray-500">Tonnage (GVW)</span>
            </li>
            <li>
              90L <br />
              <span className="text-gray-500">Fuel tank capacity</span>
            </li>
            <li>
              25 <br />
              <span className="text-gray-500">Gradeability %</span>
            </li>
          </ul>
          <div className="flex gap-2 pt-4">
            <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded">
              Know More
            </button>
            <a
              href={h5}
              className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Broucher
            </a>
          </div>
        </div>

        {/* Repeat the same structure for all trucks */}
      </div>

      {/* MCV Section */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 font-serif py-8">
        MCV
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4 shadow-sm">
          <img
            src="https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/1916-lpt.png?VersionId=G2wTsqUVKYvVWZxxu0C.65P7uTh2.s_n"
            alt="TATA LPT 1916"
            className="w-full object-contain"
          />
          <h1 className="text-lg sm:text-xl font-semibold text-center text-blue-950 mt-4">
            TATA LPT 1916
          </h1>
          <ul className="flex justify-between text-xs sm:text-sm pt-4 px-2">
            <li>
              18500 Kg <br />
              <span className="text-gray-500">Tonnage (GVW)</span>
            </li>
            <li>
              160L <br />
              <span className="text-gray-500">Fuel tank capacity</span>
            </li>
            <li>
              24 <br />
              <span className="text-gray-500">Gradeability %</span>
            </li>
          </ul>
          <div className="flex gap-2 pt-4">
            <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded">
              Know More
            </button>
            <a
              href={h5}
              className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Broucher
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ilmcv;
