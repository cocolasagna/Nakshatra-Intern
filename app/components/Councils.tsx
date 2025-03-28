import Image from 'next/image'
import council1 from "../../public/council/council_1.png";
import council2 from "../../public/council/council_2.jpg";
import council3 from "../../public/council/council_3.png";
import council4 from "../../public/council/council_4.jpg";
import council5 from "../../public/council/council_5.png";
import council6 from "../../public/council/council_6.png";
import council7 from "../../public/council/council_7.jpg";
import council8 from "../../public/council/council_8.jpg";


const councilImages = [council8, council2,council3,council4,council5,council6,council7,council1];


export default function Council(){
    return (
            <div className="container px-4    py-12 max-w-full  ">
                  <div className="flex flex-col-reverse justify-center items-center w-full  gap-8">
                   
            
                    {/* Image Grid */}
                    <div className="w-2/3">
                      <div className="grid grid-cols-3 gap-4">
                        {councilImages.map((councilImage, index) => (
                          <div 
                            key={index}
                            className={`
                                relative rounded-xl overflow-hidden
                                shadow-lg hover:shadow-xl transition-all duration-300
                                ${index === 0 ? 
                                  'col-span-2 aspect-[2/1]' : 
                                  'col-span-1 aspect-square'}
                                ${index === 1 ? 'row-span-1' : ''}
                              `}
                          >
                            <Image 
                              src={councilImage}
                              alt={`GAC initiative ${index + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-white/20 hover:bg-white/30 
                              transition-colors duration-300" />
                          </div>
                        ))}
                      </div>
                    </div>
            
                     {/* Text Content */}
                     <div className="w-2/3 space-y-6 ml-8 text-center  ">
                      <div className="space-y-2   ">
                        <h4 className="text-blue-400   text-2xl">Our Councils</h4>
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                          The Pillars of Global Act Council
                        </h1>
                      </div>
            
                      <div className="space-y-4 text-gray-600 text-lg items-center text-center">
                        <p>
                        The Global Act Council operates through eight specialized councils, each addressing critical aspects of global progress. 
                        These councils bring together expertise, innovation, and actionable strategies to drive impactful change.
                        </p>
                        
                    
                      </div>
                    </div>
                  </div>
                </div>
    )
}