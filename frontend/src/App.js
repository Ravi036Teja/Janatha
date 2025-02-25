import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Careers from "./pages/Carrier/Careers";
// import Products from "./pages/Products/Products";
import MHcv from "./pages/Products/M&HCV_Tippers/M&Hcv.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Enqiry from "./pages/Enqiry/Enqiry.jsx";
import Signa2823 from "./pages/Products/models/Signa2823/Signa2823.jsx";
import Signa2821 from "./pages/Products/models/Signa2821.jsx";
import Aboutus from "./pages/About/Aboutus.jsx";
import Showroom from "./pages/Network/Showroom/Showroom.jsx";
import 'leaflet/dist/leaflet.css';
import GangavathiWf from "./pages/Enqiry/Gangavathi_wf.jsx";
import DanapurWf from "./pages/Enqiry/DanapurWf.jsx";
import KurekuppaWf from "./pages/Enqiry/KurekuppaWf.jsx";
import RaichurWf from "./pages/Enqiry/RaichurWf.jsx";
import BallariWf from "./pages/Enqiry/BallariWf.jsx";

const App = () => {
  return (
    <main>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/mhcv" element={<MHcv/>} />
          {/* Service Booking Forms */}
          <Route path="/enqiry" element={<Enqiry/>} />
          <Route path="/gangavathi" element={<GangavathiWf/>} />
          <Route path="/danapurwf" element={<DanapurWf/>} />
          <Route path="/kurekuppawf" element={<KurekuppaWf/>} />
          <Route path="/raichurwf" element={<RaichurWf/>} />
          <Route path="/ballariwf" element={<BallariWf/>} />
          <Route path="/about" element={<Aboutus/>} />
          <Route path="/signa2823" element={<Signa2823/>} />
          <Route path="/signa2821" element={<Signa2821/>} />
          <Route path="/showroom" element={<Showroom/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </main>
  );
};

export default App;
