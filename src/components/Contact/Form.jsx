import React, { useState } from "react";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      subject: "",
      message: "",
      purpose: "Room Booking",
      captcha: "",
    });
  };

  return (
    // <div className="ml-auto w-1/2 h-[80vh] sticky top-6">
    <div className="bg-bg-gold-dark text-2xl p-12">
      <p>
        Can't find the contact and information you're looking for? Write to us
        via this quick form.
      </p>
      <form onSubmit={handleSubmit}>
        <ul className="py-8 flex items-center justify-center flex-col gap-4">
          <li className="w-full">
            <label htmlFor="Name" className="text-base text-navy">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-2 border-b border-ivory focus:outline-none focus:border-gold bg-transparent text-navy"
              required
            />
          </li>
          <li className="w-full">
            <label htmlFor="Email" className="text-base text-navy">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 border-b border-ivory focus:outline-none focus:border-gold bg-transparent text-navy"
              required
            />
          </li>
          <li className="w-full">
            <label htmlFor="Purpose" className="text-base text-navy">
              Purpose
            </label>
            <select
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full py-2 border-b border-ivory focus:outline-none focus:border-gold bg-transparent text-navy"
            >
              <option value="Room Booking">Room Booking</option>
              <option value="Hall Booking">Hall Booking</option>
              <option value="Others">Others</option>
            </select>
          </li>
          <li className="w-full">
            <label htmlFor="Message" className="text-base text-navy">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="2"
              value={formData.message}
              onChange={handleChange}
              className="w-full py-2 border-b border-ivory focus:outline-none focus:border-gold bg-transparent text-navy"
              required
            ></textarea>
          </li>
        </ul>
        <div>
          <button
            type="submit"
            className="w-full group flex items-center justify-center gap-2 bg-navy text-gold hover:bg-ivory/50 hover:text-navy px-6 py-4 rounded-full text-lg transition-all duration-150 ease-linear"
          >
            Send Message
            <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
          </button>
        </div>
      </form>
    </div>
    // </div>
  );
};

export default ContactForm;
