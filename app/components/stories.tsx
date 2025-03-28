import Image from 'next/image'
import council1 from "../../public/council/council_1.png";
import council2 from "../../public/council/council_2.jpg";
import council3 from "../../public/council/council_3.png";

const councilData = [
    { image: council1, date: '27th,Jan 2025', description: 'First image description' },
    { image: council2, date: '27th,Jan 2025', description: 'Second image description' },
    { image: council3, date: '27th,Jan 2025', description: 'Third image description' }
];

export default function Stories() {
  return (
    <div className="container px-4 py-12 max-w-full">
      <div className="flex flex-col justify-center items-center w-full gap-8">
  
        {/* Text Content */}
        <div className="w-full md:w-2/3 space-y-6 text-center">
          <div className="space-y-2">
            <h4 className="text-blue-400 text-2xl">Global Stories</h4>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Our Members, Our Stories
            </h1>
          </div>
  
          <div className="space-y-4 text-gray-600 text-lg">
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consequuntur excepturi porro voluptates quo exercitationem 
              ab possimus odio soluta quisquam dignissimos officiis aperiam ratione ducimus voluptate natus reprehenderit alias aliquam?
            </p>
          </div>
        </div>
  
        {/* Image Grid */}
        <div className="w-full md:w-2/3 mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {councilData.map((item, index) => (
              <div
                key={index}
                className={`
                  group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl
                  transition-all duration-300 w-full 
                  ${index === 0 ? 'md:row-span-2 h-auto' : 'md:col-start-2 h-80'} 
                `}
              >
              
                <Image
                  src={item.image}
                  alt={item.date}
                  width={200} 
                  height={200} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />

           
                

               
                <div className="absolute bottom-0 left-0 z-20 p-4 text-white">
                  <h2 className="text-lg ">{item.date}</h2>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
