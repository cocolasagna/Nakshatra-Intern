const contents =[ 
    {
    title: "GAC2025", 
    description:'Lorem ipsum dolor sit amet consectetur. Mauris leo posuere et lectus. Adipiscing porttitor accumsan diam eget nisi sagittis. Est sed maecenassed sit magnis. Potenti luctus platea eget odio.',
    Time: "9:59AM",
    Date: "27th Jan,2025",
    } , 
    {
        title: "GAC2025", 
        description:'Lorem ipsum dolor sit amet consectetur. Mauris leo posuere et lectus. Adipiscing porttitor accumsan diam eget nisi sagittis. Est sed maecenassed sit magnis. Potenti luctus platea eget odio.',
        Time: "9:59AM",
        Date: "27th Jan,2025",
        } , 
        {
            title: "GAC2025", 
            description:'Lorem ipsum dolor sit amet consectetur. Mauris leo posuere et lectus. Adipiscing porttitor accumsan diam eget nisi sagittis. Est sed maecenassed sit magnis. Potenti luctus platea eget odio.',
            Time: "9:59AM",
            Date: "27th Jan,2025",
            } 
   
]

export default function Cards() {
    return (
      <div className="relative">
        {/* Vertical Timeline Line */}
        

        <div className="grid gap-10 pr-10">
          {contents.map((content, index) => (
            <div key={index} className="relative flex items-center">
              {/* Horizontal Line connecting to the card */}
              <div className="  lg:absolute lg:left-[750px] lg:w-125 lg:h-1 lg:bg-gray-300"></div>

              {/* Card */}
              <div 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
                p-6 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1 w-full"
              >
                <div className="flex flex-col h-full w-full">
                  {/* Title Section */}
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-blue-400">{content.title}</h4>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 flex-grow">{content.description}</p>

                  {/* Time/Date Section */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-black font-semibold">{content.Time}</span>
                      <span className="text-gray-500">{content.Date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
