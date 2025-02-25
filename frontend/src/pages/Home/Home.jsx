import React from "react";
import AuroraBackground from "./AuroraBackground";
import Gallary from "./Gallary";
import VehicleRange from "./VehicleRange";

const Home = () => {


  return (
    <div id="home">
      {/* Carousel */}
      {/* <Carousel /> */}
      <AuroraBackground />

    {/* Vehicle range */}
      <div>
        <VehicleRange/>
      </div>
      <div>
      {/* <video
        className="object-cover w-full h-[100vh] p-2 bg-white/10 shadow-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={b1} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Gallary/>
      </div>
    </div>
  );
};

export default Home;
