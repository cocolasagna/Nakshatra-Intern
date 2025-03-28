import Image from 'next/image'
import about1 from "../../public/about_1.jpg";
import about2 from "../../public/about_2.png";
import about3 from "../../public/about_3.png";
import about4 from "../../public/about_4.png";

const aboutImages = [about1, about2, about4 ,about3];

export default function About() {
  return (
    <div className="container px-4  py-12 md:mx-50 w-full  ">
      <div className="flex flex-col-reverse lg:flex-row gap-8 ">
       

        {/* Image Grid */}
        <div className="lg:w-1/3 pl-28">
  <div className="grid grid-cols-2 gap-4 md:grid-rows-3">
    {aboutImages.map((aboutImage, index) => (
      <div 
        key={index}
        className={`relative rounded-xl overflow-hidden 
          shadow-lg hover:shadow-xl transition-all duration-300
          aspect-square  // Always square on mobile
          ${
            index === 0 ? 
            'md:row-span-2 md:aspect-[1/2]' :  
            index === 3 ?
            'md:col-start-2 md:row-span-2 md:row-start-2 md:aspect-[1/2]' :  
            'md:aspect-square'
          }
          ${index === 1 ? 'md:col-start-2 md:row-start-1' : ''}
          ${index === 2 ? 'md:row-start-3' : ''}
        `}
      >
        <Image 
          src={aboutImage}
          alt={`GAC initiative ${index + 1}`}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-white/20 hover:bg-white/30 transition-colors duration-300" />
      </div>
    ))}
  </div>
</div>




         {/* Text Content */}
         <div className="lg:w-2/3 space-y-6 ml-8  ">
          <div className="space-y-2 ">
            <h4 className="text-blue-400  text-lg">ABOUT US</h4>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              The Story Behind Our Journey
            </h1>
          </div>

          <div className="space-y-4 text-gray-600 text-lg">
            <p>
            The Global Act Council (GAC) is an international platform dedicated to uniting dynamic changemakers who tackle the world's most pressing challenges. 
            Believing that youth are the cornerstone of sustainable development, 
            GAC empowers individuals to take meaningful action through education, collaboration, and transformative programs
            </p>
            
            <p className="font-semibold text-gray-800">
              We are not just a council, we are a movement, mobilizing the most generous 
              and therefore to create more and more generous diverse activities.
            </p>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg 
            transition-all duration-300 transform hover:scale-105 mt-6">
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  )
}