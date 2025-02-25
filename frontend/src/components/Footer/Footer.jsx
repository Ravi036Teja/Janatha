import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="min-h-screen" id="contact">
      {/* Newsletter Section */}
      <motion.div 
        className="bg-gray-100 w-full h-[250px] space-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-xl font-serif pt-8 md:pt-20">Our Newsletter</p>
        <div className="flex flex-col justify-center items-center px-4 md:px-20">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-serif text-center mb-4 md:mb-0">
            Subscribe to Our Newsletter to Get <span className="text-blue-700">Updates on Our Latest Offers</span>
          </h1>
          <form className="py-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="font-serif flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white font-serif rounded-full hover:text-black hover:bg-white hover:border hover:border-black transition-all focus:outline-none focus:ring-2 focus:ring-blue-900 w-full sm:w-auto"
            >
              Get Started
            </button>
          </form>
        </div>
      </motion.div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 px-6 md:px-20 pt-10 gap-8">
        {/* Company Info */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl font-serif">JAPL GROUP</h1>
          <div className="flex gap-4 mt-6">
            <FaFacebook className="cursor-pointer hover:text-gray-400" />
            <FaWhatsapp className="cursor-pointer hover:text-gray-400" />
            <FaXTwitter className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
          </div>
        </motion.div>

        {/* Sections with Animations */}
        {[
          { title: "Company", items: ["Home", "About Us", "Contact", "Career"] },
          { title: "Products", items: ["M&HCV Construck Tippers", "M&HCV Cargo", "LCV", "ICV", "Busses"] },
          { title: "Quick Links", items: ["Home", "Enquiry", "Services", "Network", "About Us"] }
        ].map((section, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h1 className="font-serif text-xl">{section.title}</h1>
            <ul className="cursor-pointer space-y-2 pt-4 font-serif">
              {section.items.map((item, idx) => (
                <li key={idx} className="hover:text-gray-400 font-serif">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Contact Info Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-xl">Registered Office</h1>
          <p className="pt-4 font-serif">
            JANATHA COMPLEX, Ward No 10, Near BalaTalkies, India, Karnataka - <br /> 583201
          </p>
          <h2 className="font-serif text-xl pt-4">Office Hours</h2>
          <p className="font-serif">Monday to Saturday</p>
          <p className="font-serif">9am to 7pm</p>
        </motion.div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-10 w-full h-0.5 bg-gray-100"></div>
      <p className="text-center py-4 font-serif">
        Copyright © 2025 JAPL, all rights reserved
      </p>
    </div>
  );
};

export default Footer;