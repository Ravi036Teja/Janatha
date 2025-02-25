import React from "react";
import MapComponent from "./MapComponent";

const Showroom = () => {
  return (
    <div className="pt-20 min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Column 1: Address Details */}
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold text-[#0B389D]">Corporate Office</h1>
        <h2 className="text-xl md:text-2xl font-semibold">Hosapete</h2>
        <p className="text-gray-500 text-sm md:text-md">
          JANATHA COMPLEX, Ward No 10, Near BalaTalkies, Karnataka - <br /> 583201
        </p>

        <div className="border-b bg-[#f2f2f2]"></div>

        {/* Workshops Section */}
        <h1 className="text-3xl font-semibold text-[#0B389D]">Workshops</h1>

        {/* Gangavathi Address */}
        <h2 className="text-xl md:text-2xl font-semibold">Gangavathi</h2>
        <p className="text-gray-500 text-sm md:text-md">
          Property No 29/14, Gangavathi Sindhanur Main Road, Marali, Koppal, <br />
          Karnataka - 583268
        </p>

        <div className="border-b bg-[#f2f2f2]"></div>

        {/* Kurekuppa Address */}
        <h2 className="text-xl md:text-2xl font-semibold">Kurekuppa</h2>
        <p className="text-gray-500 text-sm md:text-md">
          Property No 188/C/3, Ward No 3, Kurekuppa, Ballari, Karnataka - 583123
        </p>

        <div className="border-b bg-[#f2f2f2]"></div>

        {/* Danapuram Address */}
        <h2 className="text-xl md:text-2xl font-semibold">Danapuram</h2>
        <p className="text-gray-500 text-sm md:text-md">
          Ground Floor, SY No 250/A, 433 B/1, 433 B/2, NH13, Bangalore Road, Opp BMM ispat Ltd Plant,
          Danapuram, Vijayanagara
        </p>

        <div className="border-b bg-[#f2f2f2]"></div>

        {/* Raichur Address */}
        <h2 className="text-xl md:text-2xl font-semibold">Raichur</h2>
        <p className="text-gray-500 text-sm md:text-md">
          SY No 69, Lingasugar Road, Hansihalhudea Village, Near power gate, Raichur, Karnataka - 584101
        </p>

        <div className="border-b bg-[#f2f2f2]"></div>

        {/* Ballari Address */}
        <h2 className="text-xl md:text-2xl font-semibold">Ballari</h2>
        <p className="text-gray-500 text-sm md:text-md">
          SY No 888/2/01, Janatha Automobiles Private Limited, Near Chaitanya Fuels, Kolagal village,
          Ballari, Karnataka - 583101
        </p>
      </div>

      {/* Column 2: Map */}
      <div className="p-4 bg-white/10 rounded-lg shadow-lg md:mb-[400px] z-0">
        <MapComponent />
      </div>
    </div>
  );
};

export default Showroom;
