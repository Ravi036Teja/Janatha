import { React, useState } from "react";
import h5 from "../../../pdf/4830.pdf";
import Ilmcv from "../ILMCV_Trucks/Ilmcv_Trucks";
import Tippers from "../Tippers/Tippers";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MHcv = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    vehicleType: ""
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Please enter a valid email.";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Phone number must be 10 digits.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.vehicleType)
      newErrors.vehicleType = "Vehicle type is required.";
    return newErrors;
  };
  // new
  const onSubmit = async (event) => {
    event.preventDefault();

    // Validate the form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setResult("Sending....");
    setErrors({});

    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", "17ba6636-ac5a-483e-8ce7-60b66b464f5d");

    // Add multiple recipients
    //   formDataObj.append("recipients", "rteja6067@gmail.com" , "sgsshankar036@gmail.com");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        vehicleType: ""
      });
    } else {
      setResult(data.message);
    }
  };

  return (
    <div className="mt-20 mx-12 min-h-screen" id="haulage">
      {/* Enquiry */}
      <div className="bg-[#F2F3FB] p-4 md:p-6 lg:p-8 text-black rounded-lg my-6">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-md font-serif">
                Name
              </label>
              <input
                placeholder="Enter your name"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="text-black w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              {errors.name && (
                <span className="text-yellow-400">{errors.name}</span>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-md font-serif">
                Email
              </label>
              <input
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="text-black w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              {errors.email && (
                <span className="text-yellow-400">{errors.email}</span>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-md font-serif">
                Phone
              </label>
              <input
                placeholder="Enter your number"
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="text-black w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              {errors.phone && (
                <span className="text-yellow-400">{errors.phone}</span>
              )}
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-md font-serif">
                Address
              </label>
              <input
                placeholder="Enter your address"
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="text-black w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              {errors.address && (
                <span className="text-yellow-400">{errors.address}</span>
              )}
            </div>

            {/* Vehicle Type */}
            <div>
              <label
                htmlFor="vehicleType"
                className="block text-md font-serif"
              >
                Select Model
              </label>
              <select
                name="vehicleType"
                id="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="text-black w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="" className="font-serif">Select Model</option>
                <option value="Car" className="font-serif">Haulage</option>
                <option value="Truck" className="font-serif">ILMCV Cargo</option>
                <option value="LCV" className="font-serif">Tippers</option>
              </select>
              {errors.vehicleType && (
                <span className="text-yellow-400">{errors.vehicleType}</span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="font-serif w-full md:w-auto px-6 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Enquiry
          </button>
          <p className="mt-2 text-gray-600">{result}</p>
        </form>
      </div>

      <h1 className="text-4xl font-serif text-center text-blue-700 pb-2">
        Haulage
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* col 1 */}
        <div className="border">
          <img
            src="https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/SIGNA-2821T.jpg?VersionId=m4W678YGrqA_jDVetNzxtdrGBV9rOp16"
            alt=""
          />
          <h1 className="text-xl font-serif text-center text-blue-700">
            TATA SIGNA 2821.T
          </h1>
          <ul className="flex justify-between pt-4 px-2">
            <li className="text-sm font-serif">
              28000 Kg <br />{" "}
              <span className="text-gray-500 font-serif">Tonnage (GVW)</span>
            </li>
            <li className="text-sm font-serif">
              365L <br />{" "}
              <span className="text-gray-500 font-serif">Fuel tank capacity</span>
            </li>
            <li className="text-sm font-serif">
              NA <br />
              <span className="text-gray-500 font-serif">Gradeability %</span>
            </li>
          </ul>
          <div className="flex gap-4 pt-2 px-2 my-2">
            <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white">
              <a href="/signa2821" className="font-serif">Know More</a>
            </button>
            <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white">
              <a href={h5} className="font-serif">Broucher</a>
            </button>
            {/* <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300"><FaImage/></button> */}
          </div>
        </div>

        {/* col 2 */}
        <div className="border">
          <img
            src="https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/SIGNA-2823T.jpg?VersionId=bcGOF0T2Y8E0IiaJF6pkH1FoAglE6xhk"
            alt=""
          />
          <h1 className="text-xl font-serif text-center text-blue-700">
            TATA SIGNA 2823.T
          </h1>
          <ul className="flex justify-between pt-4 px-2">
            <li className="text-sm font-serif">
              28000 Kg <br />{" "}
              <span className="text-gray-500 font-serif">Tonnage (GVW)</span>
            </li>
            <li className="text-sm font-serif">
              365L <br />{" "}
              <span className="text-gray-500 font-serif">Fuel tank capacity</span>
            </li>
            <li className="text-sm font-serif">
              NA <br />
              <span className="text-gray-500 font-serif">Gradeability %</span>
            </li>
          </ul>
          <div className="flex gap-4 pt-2 px-2 my-2">
            <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white">
              <a href="/signa2823" className="font-serif">Know More</a>
            </button>
            <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white">
              <a href={h5} className="font-serif">Broucher</a>
            </button>
            {/* <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300"><FaImage/></button> */}
          </div>
        </div>

        {/* col 3 */}
        <div className="border">
          <img
            src="https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/SIGNA-3525T.jpg?VersionId=4f9rz3FA89NPDqyIood7Ej7QRb5aCkIM"
            alt=""
          />
          <h1 className="text-xl font-serif text-center text-blue-700">
            TATA SIGNA 3525.T
          </h1>
          <ul className="flex justify-between pt-4 px-2">
            <li className="text-sm font-serif">
              31000 Kg <br />{" "}
              <span className="text-gray-500 font-serif">Tonnage (GVW)</span>
            </li>
            <li className="text-sm font-serif">
              365L <br />{" "}
              <span className="text-gray-500 font-serif">Fuel tank capacity</span>
            </li>
            <li className="text-sm font-serif">
              NA <br />
              <span className="text-gray-500 font-serif">Gradeability %</span>
            </li>
          </ul>
          <div className="flex gap-4 pt-2 px-2 my-2">
            <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white">
            <a href="#" className="font-serif">Know More</a>
            </button>
            <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white">
              <a href={h5} className="font-serif">Broucher</a>
            </button>
           
          </div>
        </div>
        {/* col 4 */}
        <div className="border mb-4">
          <img
            src="https://trucks.tatamotors.com/assets/trucks/files/Products/2024-02/SIGNA-4225T.jpg?VersionId=B71ouVfnpjQ_kxNfPaAidcySDQY3UbEW"
            alt=""
          />
          <h1 className="text-xl font-semibold text-center text-blue-950">
            TATA SIGNA 4225.T
          </h1>
          <ul className="flex justify-between pt-4 px-2">
            <li className="text-sm">
              42000 Kg <br />{" "}
              <span className="text-gray-500">Tonnage (GVW)</span>
            </li>
            <li className="text-sm">
              365L <br />{" "}
              <span className="text-gray-500">Fuel tank capacity</span>
            </li>
            <li className="text-sm">
              NA <br />
              <span className="text-gray-500">Gradeability %</span>
            </li>
          </ul>
          <div className="flex gap-4 pt-2 px-2 my-2">
            <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white">
              Know More
            </button>
            <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white">
              <a href={h5}>Broucher</a>
            </button>
          </div>
        </div>

     </div> 
      <div id="#ilmcv">
        <Ilmcv />
      </div>
      <div id="#tippers">
        <Tippers />
      </div>
    </div>
  );
};

export default MHcv;
