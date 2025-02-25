import React, { useState } from "react";
import menu from "../../Icons/menus.png";
import cross from "../../Icons/close-btn.png";

const Navbar2 = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white border-white/20 shadow-lg">
      <div className="container flex justify-between items-center py-4 bg-transparent">
        <h1 className="flex place-items-center gap-2 text-2xl font-serif font-bold text-blue-700 ml-4">
          <img src="" alt="" className="bg-black" /> JAPL GROUP
        </h1>
        <ul className="hidden md:flex gap-7">
          <a className="hover:text-blue-700 font-serif" href="/">Home</a>
          <a className="hover:text-blue-700 font-serif" href="/mhcv">Products</a>
          <div className="relative group">
            <a href="/gangavathi" className="hover:text-blue-700 cursor-pointer font-serif">Service Enquiry</a>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 duration-200 transition-opacity">
              <a href="/gangavathi" className="block px-4 py-2 hover:bg-gray-100 font-serif">Gangavathi Service</a>
              <a href="/danapurwf" className="block px-4 py-2 hover:bg-gray-100 font-serif">Danapur Service</a>
              <a href="/kurekuppawf" className="block px-4 py-2 hover:bg-gray-100 font-serif">Kurekuppa Service</a>
              <a href="/raichurwf" className="block px-4 py-2 hover:bg-gray-100 font-serif">Raichur Service</a>
              <a href="/ballariwf" className="block px-4 py-2 hover:bg-gray-100 font-serif">Ballari Service</a>
            </div>
          </div>
          <a className="hover:text-blue-700 font-serif" href="/about">About Us</a>
          <a className="hover:text-blue-700 font-serif" href="/career">Career</a>
          <a className="hover:text-blue-700 font-serif" href="/showroom">Address</a>
          <a className="hover:text-blue-700 font-serif" href="#contact">Contact | +91 123456789</a>
        </ul>
        <img onClick={() => setShowMobileMenu(true)} src={menu} className="md:hidden w-8 mr-6" alt="MenuBars" />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${showMobileMenu ? "fixed w-full h-auto" : "h-0 w-0"} right-0 top-0 bottom-0 overflow-hidden bg-gray-100 transition-all`}>
        <div className="flex justify-end p-6">
          <img onClick={() => setShowMobileMenu(false)} src={cross} className="w-10 cursor-pointer" alt="CrossBar" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-2xl font-semibold">
          <a onClick={() => setShowMobileMenu(false)} href="/" className="hover:text-blue-700 px-4 py-2 rounded-full inline-block font-serif">Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="/mhcv" className="hover:text-blue-700 px-4 py-2 rounded-full inline-block font-serif">Products</a>
          <div className="w-full text-center">
            <button onClick={() => setShowServiceDropdown(!showServiceDropdown)} className="hover:text-blue-700 px-4 py-2 rounded-full inline-block font-serif focus:outline-none">
              Service Enquiry
            </button>
            {showServiceDropdown && (
              <div className="flex flex-col bg-white shadow-lg rounded-md text-lg">
                <a onClick={() => setShowMobileMenu(false)} href="/gangavathi" className="block px-4 py-2 hover:bg-gray-100 font-serif">Gangavathi Service</a>
                <a onClick={() => setShowMobileMenu(false)} href="/danapurwf" className="block px-4 py-2 hover:bg-gray-100 font-serif">Danapur Service</a>
                <a onClick={() => setShowMobileMenu(false)} href="/kurekuppawf" className="block px-4 py-2 hover:bg-gray-100 font-serif">Kurekuppa Service</a>
                <a onClick={() => setShowMobileMenu(false)} href="/raichurwf" className="block px-4 py-2 hover:bg-gray-100 font-serif">Raichur Service</a>
                <a onClick={() => setShowMobileMenu(false)} href="/ballariwf" className="block px-4 py-2 hover:bg-gray-100 font-serif">Ballari Service</a>
              </div>
            )}
          </div>
          <a onClick={() => setShowMobileMenu(false)} href="/about" className="hover:text-blue-700 px-4 py-2 rounded-full inline-block font-serif">About Us</a>
          <a onClick={() => setShowMobileMenu(false)} href="/career" className="hover:text-blue-700 px-4 py-2 rounded-full inline-block font-serif">Career</a>
          <a onClick={() => setShowMobileMenu(false)} href="/showroom" className="hover:text-blue-700 px-4 py-2 rounded-full inline-block font-serif">Address</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
