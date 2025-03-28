import Image from 'next/image'
import Cards from './happening_card'

export default function Happening(){
  
            return (
                    <div className="container px-4    py-12 max-w-full  ">
                        
                          <div className=" flex flex-col-reverse   w-full  gap-8">
                         
                           
                           <div className='md:relative flex'>
                           <div className=" md:block hidden md:absolute md:right-80 md:top-0 md:bottom-0 md:w-1 md:bg-gray-300"></div>
                             {/* Card Grid */}
                             <div className='lg:w-225 lg:mx-75 justify-center items-center'>
                           
                           <Cards/>
                         
                           </div>

                           </div>
                    
                          
                            
                    
                             {/* Text Content */}
                             <div className=" space-y-6 ml-8 text-center  ">
                              <div className="space-y-2   ">
                                <h4 className="text-blue-400   text-2xl">What's Happening</h4>
                                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                                  Mark your Calender
                                </h1>
                              </div>
                    
                              <div className="space-y-4 text-gray-600 text-lg items-center text-center">
                                <p>
                                Explore key events and opportunities to engage with the Global Act Council
                                </p>
                                
                            
                              </div>
                            </div>
                          </div>
                        </div>
            )
        }
