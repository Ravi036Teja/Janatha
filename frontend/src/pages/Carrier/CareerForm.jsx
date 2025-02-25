import React, { useState } from 'react';

const CareerForm = () => {
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

    console.log('Submitted Data:', formData);

    setFormData({
      name: '',
      email: '',
      phone: '',
      coverLetter: '',
      resume: null,
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg md:max-w-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Apply for a Career</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-gray-800 font-medium">
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
            className="w-full mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-gray-800 font-medium">
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
            className="w-full mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-gray-800 font-medium">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91-XXXXXXXXXX"
            required
            className="w-full mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Cover Letter Field */}
        <div>
          <label htmlFor="coverLetter" className="block text-gray-800 font-medium">
            Cover Letter
          </label>
          <textarea
            name="coverLetter"
            id="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Write your cover letter..."
            rows="5"
            required
            className="w-full mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>

        {/* Resume Upload Field */}
        <div>
          <label htmlFor="resume" className="block text-gray-800 font-medium">
            Resume
          </label>
          <input
            type="file"
            name="resume"
            id="resume"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            required
            className="w-full mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
