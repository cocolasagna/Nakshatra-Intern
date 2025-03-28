import NewsCards from "./News_Cards"

export default function News(){

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
     
          <div className="flex ">
                <NewsCards/>
          </div>
          <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg 
            transition-all duration-300 transform hover:scale-105 mt-6">
            Read More
          </button>
          </div>
         </div>
       </div>
    )
}