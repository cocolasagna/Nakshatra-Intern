"use client"; 
import React from "react";
import Image from 'next/image'
import glocal_icon from '../../public/global_icon.png'
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";


const footerLinks = [
    {
      label: "Quick Link",
      subItems: ["About us", "Resources", "Opportunity", "Blogs", "Contact Us"],
    },
    {
      label: "Teams",
      subItems: ["GAC Members", "International Teams", "Advisory Teams", "Country Directors"],
    },
    {
      label: "Conference",
      subItems: ["GAC2025", "GAC2024"],
    },
    {
      label: "Council",
      subItems: [
        "Human Rights, Peace & Security Council",
        "Environment & Biodiversity Council",
        "SDGs Council",
        "Science & Technology Council",
        "International Affairs & Diplomacy Council",
        "Trade & Economy Council",
        "Youth & Education Council",
        "Information and Communication Council",
      ],
    },
    {
      label: "Company",
      subItems: ["About us", "Partners", "Customers", "Contact us"],
    },
  ];


export default function Footer() {


  return (
    <footer className="bg-white py-8 ">
         <div className="mb-8 md:mb-0 flex justify-center items-center ">
            <Image
              src={glocal_icon}
              alt="Global Act Council"
              width={200}
              height={80}
              className="object-contain"
            />
          </div>

      <div className="mx-auto max-w-7xl px-4 py-4">
    
        {/* Top Section: Footer Links */}
        <div className="flex flex-wrap  justify-between gap-8">
       
          {footerLinks.map((section, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-auto">
              <h4 className="mb-2 text-base font-semibold text-gray-800">{section.label}</h4>
              <ul className="space-y-1">
                {section.subItems.map((item, idx) => (
                  <li key={idx}>
                   
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition-colors duration-200 hover:text-gray-800"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-gray-200 pt-4 ">
            <div>
  <p className="text-sm text-gray-500 text-center">© 2024 GAC. All rights reserved.</p>
  </div>
  <div className="flex  space-x-4">
    {/* Social icons placeholders - replace with actual icons/links */}
    <BiLogoFacebook />
    <IoLogoInstagram />
    <FaTwitter />
  </div>
</div>

      </div>
    </footer>
  );
}
