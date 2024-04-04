import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";

const EnquiryForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    eventTitle: "",
    date: "",
    pax: "",
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
    onClose(); // Close the form popup after submission
  };

  const handleFormClick = (e) => {
    e.stopPropagation(); // Prevent propagation of click event
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-bg-gold-light p-8 rounded-md"
        onClick={handleFormClick}
      >
        <h2 className="text-3xl text-center font-semibold mb-12">
          Enquiry Form
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="text-white hover:text-white/50 transition-all duration-500 text-4xl absolute top-4 right-4 z-10"
        >
          <IoClose />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="eventTitle" className="text-base text-navy">
                Event Title
              </label>
              <input
                type="text"
                id="eventTitle"
                name="eventTitle"
                value={formData.eventTitle}
                onChange={handleChange}
                className="text-xl w-full py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="text-base text-navy">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="text-xl w-full py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
                required
              />
            </div>
            <div>
              <label htmlFor="pax" className="text-base text-navy">
                Number of Pax
              </label>
              <input
                type="number"
                id="pax"
                name="pax"
                value={formData.pax}
                onChange={handleChange}
                className="text-xl w-full py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="text-base text-navy">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-xl w-full py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-base text-navy">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-xl w-full py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
                required
              />
            </div>
            <div>
              <label htmlFor="contact" className="text-base text-navy">
                Contact
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="text-xl w-full py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="message" className="text-base text-navy">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="text-xl w-full py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
                required
              ></textarea>
            </div>
          </div>
          <div className="w-full mt-8">
            <button
              type="submit"
              className="w-full group flex items-center justify-center gap-2 bg-goldLight text-navy hover:bg-navy hover:text-ivory px-6 py-4 rounded-full text-lg transition-all duration-300 ease-linear"
            >
              Submit
              <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300 ease-linear" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
