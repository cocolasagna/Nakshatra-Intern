import Image from "next/image"; 
import news1 from "../../public/news/news_1.png";


const contents = [
  {
    image: news1, 
    category: "Global Act",
    readTime: "3 min read",
    title: "Lorem Ipsum has been the industry's standard.",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: {
      name: "Rohan Karki",
      avatar: "/vercel.svg",
      timestamp: "Posted just now",
    },
  },
  {
    image: news1,
    category: "Global Act",
    readTime: "3 min read",
    title: "Lorem Ipsum has been the industry's standard.",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: {
      name: "Rohan Karki",
      avatar: "/vercel.svg",
      timestamp: "Posted just now",
    },
  },
  {
    image: news1,
    category: "Global Act",
    readTime: "3 min read",
    title: "Lorem Ipsum has been the industry's standard.",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: {
      name: "Rohan Karki",
      avatar: "/vercel.svg",
      timestamp: "Posted just now",
    },
  },
];

export default function NewsCards() {


  return (
    <div className="relative w-full px-4">
     
      <div className="flex flex-col md:flex-row gap-6 overflow-x-auto no-scrollbar py-6">
        {contents.map((content, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 
            p-4 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-1 
            min-w-[300px] max-w-[350px] w-full"
          >
           
            <div className="w-full h-40 relative">
              <Image
                src={content.image}
                alt="News Image"
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>

    
            <div className="flex items-center gap-2 mt-2">
              <span className="text-blue-500 font-semibold text-sm">
                {content.category}
              </span>
              <span className="text-gray-600 text-xs bg-gray-200 px-2 py-1 rounded-md">
                {content.readTime}
              </span>
            </div>

   
            <h4 className="text-lg font-bold text-gray-900 mt-1">
              {content.title}
            </h4>

     
            <p className="text-gray-600 text-sm mt-1">{content.description}</p>

           
            <div className="flex items-center gap-2 mt-4">
              <Image
                src={content.author.avatar}
                alt={content.author.name}
                width={30}
                height={30}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{content.author.name}</span>
                <span className="text-xs text-gray-500">{content.author.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
