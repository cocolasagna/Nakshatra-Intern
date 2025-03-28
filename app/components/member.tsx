export default function Member() {
    return (
      <div className="relative  ">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-[url('/member/member_1.jpg')] bg-cover bg-center filter  -z-10  "
        ></div>
        
        {/* Optionally, add a semi-transparent overlay for extra readability */}
        <div className="absolute inset-0 bg-black opacity-40 -z-10 "></div>
  
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center px-4">
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <h4 className="text-white pt-2 font-bold text-2xl">Become a Member of GAC</h4>
            </div>
            <div className="space-y-4 text-white text-lg">
              <p>
                Discover the benefits of being part of the Global Act Council and how you can contribute to meaningful change
              </p>
            </div>
            <div className="mb-10">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 mt-6">
                Join our Community
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  