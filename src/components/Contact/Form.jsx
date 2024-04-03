import React, { useState } from "react";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "", // Added contact number field
    subject: "",
    message: "",
    purpose: "Room Booking",
    captcha: "",
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
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      contactNumber: "", // Reset contact number field
      subject: "",
      message: "",
      purpose: "Room Booking",
      captcha: "",
    });
  };

  return (
    <div className="bg-bg-gold-light/60 text-2xl p-12">
      <p className="mb-4">
        Can't find the contact and information you're looking for? Write to us
        via this quick form.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2">
          <ul className="py-8 flex flex-col gap-4">
            <li className="w-full pr-2">
              <label htmlFor="Name" className="text-base text-navy">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-xl w-full py-2 border-b border-ivory focus:outline-none focus:border-gold bg-transparent text-navy bg-red-600"
                required
              />
            </li>
            <li className="w-full pr-2">
              <label htmlFor="Email" className="text-base text-navy">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-xl w-full py-2 border-b border-ivory focus:outline-none focus:border-gold bg-transparent text-navy"
                required
              />
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="py-8 flex flex-col gap-4">
            <li className="w-full pl-2">
              <label htmlFor="ContactNumber" className="text-base text-navy">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="text-xl w-full py-2 border-b border-ivory focus:outline-none focus:border-gold bg-transparent text-navy"
                required
              />
            </li>
            <li className="w-full pl-2">
              <label htmlFor="Subject" className="text-base text-navy">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="text-xl w-full py-2 border-b border-ivory focus:outline-none focus:border-gold bg-transparent text-navy"
                required
              />
            </li>
          </ul>
        </div>
        <li className="w-full list-none">
          <label htmlFor="Message" className="text-base text-navy">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="2"
            value={formData.message}
            onChange={handleChange}
            className="text-xl w-full py-2 border-b border-ivory focus:outline-none focus:border-gold bg-transparent text-navy"
            required
          ></textarea>
        </li>
        <div className="w-full mt-4">
          <button
            type="submit"
            className="w-full group flex items-center justify-center gap-2 bg-navy text-ivory hover:bg-gold/40 hover:text-navy px-6 py-4 rounded-full text-lg transition-all duration-150 ease-linear"
          >
            Send Message
            <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
