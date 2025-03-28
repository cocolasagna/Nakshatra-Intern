'use client';

import { useState } from 'react';
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className='flex items-center justify-center my-15 bg-gray-200 p-6'>
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg w-full max-w-5xl">
        {/* Left Section */}
        <div className="p-8 w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-blue-400 text-sm font-semibold">CONTACT US</h2>
          <h1 className="text-2xl font-bold mt-2">We're Here to Help</h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur. Praesent aliquet in blandit cursus pulvinar dignissim malesuada.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam incidunt laborum aut ullam molestiae rem nemo id beatae, reiciendis distinctio voluptatum ipsam tempora eligendi hic. Molestiae enim nesciunt architecto.
          </p>
          <div className="mt-6 space-y-4">
            <p className="flex items-center space-x-2"> < MdOutlineLocalPhone/> <span>+1 (347) 321-0819</span></p>
            <p className="flex items-center space-x-2"> <HiOutlineLocationMarker /> <span>California, USA</span></p>
            <p className="flex items-center space-x-2"> <AiOutlineMail/> <span>globalactcouncil.com</span></p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-blue-400 p-8 w-full md:w-1/2 flex flex-col justify-center text-white rounded-r-lg">
          <h2 className="text-lg font-semibold">Get Started</h2>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <span>Your First Name</span>
            <input type="text" name="firstName" placeholder="Enter your first name" className="w-full p-2 rounded text-gray-900 bg-white" onChange={handleChange} required />
            <span>Your Last Name</span>
            <input type="text" name="lastName" placeholder="Enter your last name" className="w-full p-2 rounded text-gray-900 bg-white" onChange={handleChange} required />
            <span>Email</span>
            <input type="email" name="email" placeholder="Enter your email" className="w-full p-2 rounded text-gray-900 bg-white" onChange={handleChange} required />
            <span>How can we help you?</span>
            <textarea name="message" placeholder="How can we help you?" className="w-full p-2 rounded text-gray-900 bg-white" rows="4" onChange={handleChange} required></textarea>
            <button type="submit" className="bg-white text-blue-500 w-full p-2 rounded font-semibold">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
