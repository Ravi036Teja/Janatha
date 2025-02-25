import { React, useState } from "react";
import b1 from "../../videos2/Gangavathi.mp4";

const GangavathiWf = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email:"",
    address: "",
    vehicleType: "",
    vehicleno: "",
    serviceType: "",
    servicedate: "",
    apptime: "",
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if(!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Phone number must be 10 digits.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.vehicleType)
      newErrors.vehicleType = "Vehicle type is required.";
    if (!formData.serviceType)
      newErrors.serviceType = "Service type is required.";
    if (!formData.vehicleno.trim())
      newErrors.vehicleno = "Vehicle number is required.";
    if (!formData.servicedate)
      newErrors.servicedate = "Service date is required.";
    if (!formData.apptime) newErrors.apptime = "Appointment time is required.";
    return newErrors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setResult("Sending....");
    setErrors({});
    
    // Simulate form submission
    setTimeout(() => {
      setResult("Form Submitted Successfully");
      setFormData({
        name: "",
        email:"",
        phone: "",
        address: "",
        vehicleType: "",
        vehicleno: "",
        serviceType: "",
        servicedate: "",
        apptime: "",
      });
    }, 1000);
  };

  return (
    <div className="bg-white">
      {/* hero image */}
      <div className="mx-4 lg:mx-20 pt-20 relative">
        <video
          className="object-cover w-full h-[300px] p-2 bg-white/10 shadow-lg rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={b1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <img src={b1} alt="" className="w-full h-[300px] p-1 bg-white/10 shadow-lg " /> */}
        <div classNamea="absolute inset-0">
          <h1 className="text-xl font-serif py-2 text-center text-black">
          SY no 69, Lingsugur road, Hunsihalhudea village, Near power gate, Raichur, Karnataka - 584101
          </h1>
        </div>
      </div>

      {/* form */}
      <div className="mt-14 flex items-center justify-center min-h-screen ">
        <div className="h-full w-full  mb-4  max-w-5xl p-6 mx-4 border-gray-100 bg-white/10 rounded-2xl shadow-lg border">
          {/* <h2 className="text-2xl font-serif text-center mb-8">Book a Service</h2> */}
          <h1 className="text-2xl font-serif text-center mb-8 text-blue-700">
           Raichur Service Booking Form
          </h1>
          <form action="https://api.web3forms.com/submit" method="POST" onSubmit={onSubmit} className="space-y-8 ">
            {/* Web3Forms Access Key */}
             <input type="hidden" name="access_key" value="a4df4df6-0214-41ac-a2ad-ee423889f3b9" />

            <h1 className="text-xl font-serif">Personal Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/** Name Input **/}
              <div>
                <label htmlFor="name" className="block text-md font-serif">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name}</span>
                )}
              </div>
              {/** Email Input **/}
              <div>
              <label htmlFor="email" className="block text-md font-serif">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </div>
              {/** Phone Input **/}
              <div>
                <label htmlFor="phone" className="block text-md font-serif">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && (
                  <span className="text-red-500">{errors.phone}</span>
                )}
              </div>
              {/** Address Input **/}
              <div>
                <label htmlFor="address" className="block text-md font-serif">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.address && (
                  <span className="text-red-500">{errors.address}</span>
                )}
              </div>
            </div>
            <h1 className="text-xl font-serif">Service Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" className="font-serif">Select Model</option>
                  <option value="Car" className="font-serif">M&HCV Construck</option>
                  <option value="Truck" className="font-serif">M&HCV Cargo</option>
                  <option value="LCV" className="font-serif">LCV</option>
                  <option value="ICV" className="font-serif">ICV</option>
                  <option value="Busses" className="font-serif">Busses</option>
                </select>
                {errors.vehicleType && (
                  <span className="text-red-500">{errors.vehicleType}</span>
                )}
              </div>
              <div>
                <label htmlFor="address" className="block text-md font-serif">
                  Vehicle number
                </label>
                <input
                  type="text"
                  name="vehicleno"
                  id="vehicleno"
                  placeholder="Enter vehicle number"
                  value={formData.vehicleno}
                  onChange={handleChange}
                  className="font-serif w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.address && (
                  <span className="text-red-500">{errors.vehicleno}</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-md font-serif"
                >
                  Service Type
                </label>
                <select
                  name="serviceType"
                  id="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="font-serif w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" className="font-serif">Select Service Type</option>
                  <option value="free service" className="font-serif">Free Service</option>
                  <option value="paid service" className="font-serif">Paid Service</option>
                  <option value="other" className="font-serif">Other</option>
                </select>
                {errors.serviceType && (
                  <span className="text-red-500">{errors.serviceType}</span>
                )}
              </div>{" "}
              <div>
                <label htmlFor="address" className="block text-md font-serif">
                  Service Date
                </label>
                <input
                  type="date"
                  name="servicedate"
                  id="servicedate"
                  placeholder="Select Service Date"
                  value={formData.servicedate}
                  onChange={handleChange}
                  className="font-serif w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.address && (
                  <span className="text-red-500">{errors.servicedate}</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="appointmentTime"
                  className="block text-md font-serif"
                >
                  Appointment Time
                </label>
                <select
                  name="apptime"
                  id="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  className="font-serif w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" className="font-serif">Select Time</option>
                  <option value="11am - 12pm" className="font-serif">11am - 12pm</option>
                  <option value="1pm - 2pm" className="font-serif">1pm - 2pm</option>
                  <option value="2pm - 3pm" className="font-serif">2pm - 3pm</option>
                  <option value="3pm - 4pm" className="font-serif">3pm - 4pm</option>
                  <option value="4pm - 5pm" className="font-serif">4pm - 5pm</option>
                </select>
                {errors.serviceType && (
                  <span className="text-red-500">{errors.serviceType}</span>
                )}
              </div>
              {/** Add other inputs in the same responsive manner **/}
            </div>
            <button
              type="submit"
              className="font-serif w-full md:w-40 p-3 text-white bg-blue-700  hover:bg-blue-800"
            >
              Book Service
            </button>
          </form>
          <p className="mt-2 text-green-500">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default GangavathiWf;
