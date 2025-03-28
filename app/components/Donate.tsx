import Image from "next/image";

export default function Donation() {
  return (
    <div className="bg-blue-400 text-white pl-24 pt-12  flex flex-col md:flex-row items-center relative">
      {/* Left Side - Text */}
      <div className="md:w-1/2 text-center md:text-left pb-2 ">
        <p className="text-sm uppercase font-semibold">Support Global Change</p>
        <h2 className="text-3xl font-bold mt-2">
          Fuel the Future of Global Impact
        </h2>
        <p className="mt-4 text-lg">
          Join us in advancing human rights, sustainability, and global
          collaboration by supporting our initiatives. Every donation helps us
          drive impactful change across communities worldwide.
        </p>
        <button className="mt-6  bg-white text-blue-400 font-semibold py-2 px-5 rounded-md shadow-md hover:bg-gray-100 transition">
          Donate Now
        </button>
      </div>

      {/* Right Side - Image Positioned at Bottom-Right */}
      <div className="hidden  md:w-1/2 relative mt-10 md:mt-0 md:flex justify-end">
        <div className="relative w-[600px] h-[250px] bg-white rounded-tl-xl overflow-hidden shadow-lg">
          <Image
            src="/content.png"
            alt="Main Illustration"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
