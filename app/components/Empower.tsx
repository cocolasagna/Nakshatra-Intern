"use client";

import Image from "next/image";
import GlobeImage from "../../public/empower/globe.png";
import PeopleImage from "../../public/empower/people.png";


function StatCard({ number, label }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-3 shadow-md">
      <p className="text-2xl font-bold text-blue-600">{number}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

export default function Empower() {
  return (
    <section className="relative flex flex-col md:flex-row w-full overflow-hidden py-12">
      {/* Left Side: 2/3 width */}
      <div className="md:w-2/3 bg-white p-8 flex flex-col justify-center md:ml-80">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
          Empowering <span className="text-blue-600">Change</span>, 
          <span className="block">Globally and Locally</span>
        </h1>
        <p className="mb-6 max-w-xl text-gray-700 md:text-lg">
          Join the Global Movement to Address Today&apos;s Challenges and Build a Sustainable Future.
        </p>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-md bg-blue-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-blue-700">
            Join the Movement
          </button>
          <button className="rounded-md border border-blue-600 px-6 py-2 text-blue-600 transition-colors duration-200 hover:bg-blue-50">
            Support Us
          </button>
        </div>

   
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mt-4  items-center">
          <Image
            src={PeopleImage}
            alt="People illustration"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right Side: Hidden on small screens except for stat cards */}
      <div className="relative md:w-1/3 bg-blue-400 hidden md:block">
    
        <div className="absolute top-61 left-0 w-[500px] h-[500px] -translate-x-1/2 z-0">
          <Image
            src={GlobeImage}
            alt="Globe illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

    
        <div className="absolute bottom-[-20px] left-0 right-200 z-10 flex justify-center gap-4 px-4">
          <StatCard number="180K+" label="Members" />
          <StatCard number="2000+" label="Collaborations" />
          <StatCard number="180K+" label="Volunteers" />
        </div>
      </div>

      {/* Stat Cards: Visible on small screens */}
      <div className="flex justify-center gap-4 px-4 mt-6 md:hidden">
        <StatCard number="180K+" label="Members" />
        <StatCard number="2000+" label="Collaborations" />
        <StatCard number="180K+" label="Volunteers" />
      </div>
    </section>
  );
}
