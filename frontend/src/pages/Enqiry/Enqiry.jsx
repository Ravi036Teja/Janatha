import React, { useState } from "react";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    vehicleType: "",
    serviceType: "",
    vehicleno: "",
    kilometer: "",
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
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Please enter a valid email.";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Phone number must be 10 digits.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.vehicleType) newErrors.vehicleType = "Vehicle type is required.";
    if (!formData.serviceType) newErrors.serviceType = "Service type is required.";
    if (!formData.vehicleno.trim()) newErrors.vehicleno = "Vehicle number is required.";
    if (!formData.kilometer || isNaN(formData.kilometer))
      newErrors.kilometer = "Kilometer must be a valid number.";
    if (!formData.servicedate) newErrors.servicedate = "Service date is required.";
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
    event.target.reset();
    setResult("Form Submitted Successfully");
  };

  return (
    <div className="mt-14 flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-5xl p-6 mx-4 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-serif text-center mb-8">Book a Service</h2>
        <form onSubmit={onSubmit} className="space-y-8">
          <h1 className="text-xl font-serif">Personal Details</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/** Name Input **/}
            <div>
              <label htmlFor="name" className="block text-md font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <span className="text-red-500">{errors.name}</span>}
            </div>
            {/** Email Input **/}
            <div>
              <label htmlFor="email" className="block text-md font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>
            {/** Phone Input **/}
            <div>
              <label htmlFor="phone" className="block text-md font-medium">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && <span className="text-red-500">{errors.phone}</span>}
            </div>
            {/** Address Input **/}
            <div>
              <label htmlFor="address" className="block text-md font-medium">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.address && <span className="text-red-500">{errors.address}</span>}
            </div>
          </div>
          <h1 className="text-xl font-serif">Service Details</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label htmlFor="vehicleType" className="block text-md font-medium">
                Select Model
              </label>
              <select
                name="vehicleType"
                id="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Model</option>
                <option value="Car">M&HCV Construck</option>
                <option value="Truck">M&HCV Cargo</option>
                <option value="LCV">LCV</option>
                <option value="ICV">ICV</option>
                <option value="Busses">Busses</option>
              </select>
              {errors.vehicleType && (
                <span className="text-red-500">{errors.vehicleType}</span>
              )}
            </div>
            <div>
              <label htmlFor="serviceType" className="block text-md font-medium">
                Service Type
              </label>
              <select
                name="serviceType"
                id="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Service Type</option>
                <option value="free service">Free Service</option>
                <option value="paid service">Paid Service</option>
                <option value="other">Other</option>
              </select>
              {errors.serviceType && (
                <span className="text-red-500">{errors.serviceType}</span>
              )}
            </div>
            {/** Add other inputs in the same responsive manner **/}
          </div>
          <button
            type="submit"
            className="w-full md:w-40 p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Book Service
          </button>
        </form>
        <p className="mt-2 text-green-500">{result}</p>
      </div>
    </div>
  );
};

export default Enquiry;
