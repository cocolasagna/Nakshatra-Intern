"use client"

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import glocal_icon from '../../public/global_icon.png'
import { VscLocation } from "react-icons/vsc"
import { MdAccessTime } from "react-icons/md"
import { HiOutlinePhone } from "react-icons/hi2"
import { RiArrowDropDownLine } from "react-icons/ri"

const navigation = [
  { label: "About Us" },
  { label: "Teams", subItems: ["GAC Members", "International Teams", "Advisory Teams" , "Country Directors"] },
  { label: "Conference"  , subItems: ["GAC2022", "GAC2023", "GAC204", "GAC2025", "GAC2026"]},
  { label: "Council", subItems: ["Human Rights, Peace & Security", "Environment & Biodiversity", "SDGs" , "Science & Technology", "International Affairs & Diplomacy" , "Trade & Economy", "Youth & Education","Information and Communication"] },
  { label: "Resources" , subItems: ["Opportunity" ,"Media" , "Blogs", "Studies & Report" , "Contact Us"] },
  { label: "Stories" },
  { label: "Membership" },
]

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState(null)




  const handleDropdownToggle = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  const handleSubItemClick = (subItem) => {
    console.log('Selected:', subItem)
    setActiveDropdown(null)
  }

  return (
    <header className="font-sans relative">
      {/* Top Info Bar */}
      <div className="bg-blue-400 text-white py-2 px-4 md:px-28">
        <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between text-sm space-y-1 md:space-y-0">
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="flex items-center space-x-2">
              <VscLocation />
              <span>California, USA</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdAccessTime />
              <span>Growing Hour: 9:00 am - 8:00 pm</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <HiOutlinePhone />
            <span>Phone Number: +1 (347) 321-0819</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-full mx-auto px-4 md:px-28 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <Image
              src={glocal_icon}
              alt="Global Act Council"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-4 md:gap-6 relative">
            {navigation.map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() => item.subItems 
                    ? handleDropdownToggle(item.label) 
                    : console.log('Clicked:', item.label)}
                  className="text-gray-700 hover:text-blue-900 transition-colors text-sm font-medium flex items-center gap-1"
                >
                  {item.label}
                  {item.subItems && (
                    <RiArrowDropDownLine className={`transform transition-transform ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {item.subItems && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem}
                        onClick={() => handleSubItemClick(subItem)}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}