import React, { useState } from 'react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null,
  });

  // Handle text/textarea input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input change separately
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // For demonstration, we're logging the form data.
    // In a real application, you might send this data to your backend API.
    console.log('Submitted Data:', formData);

    // Reset the form if needed
    setFormData({
      name: '',
      email: '',
      phone:'',
      coverLetter: '',
      resume: null,
    });
  };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-md">
      {/* <h2 className="text-2xl font-bold mb-4 text-center"></h2> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="mt-1 block w-full border border-gray-300 shadow-sm p-2 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
            className="mt-1 block w-full border border-gray-300  shadow-sm p-2 focus:ring focus:ring-blue-200"
          />
        </div>


        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-gray-700">
            Phone
          </label>
          <input
            type="string"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="91+"
            required
            className="mt-1 block w-full border border-gray-300  shadow-sm p-2 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Cover Letter Field */}
        <div>
          <label htmlFor="coverLetter" className="block text-gray-700">
            Message
          </label>
          <textarea
            name="coverLetter"
            id="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Write your Message here..."
            rows="5"
            required
            className="mt-1 block w-full border border-gray-300  shadow-sm p-2 focus:ring focus:ring-blue-200"
          ></textarea>
        </div>


        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
