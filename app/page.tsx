import Image from "next/image";
import Navigation  from "./components/Navigation";
import Empower from './components/Empower'
import About from './components/AboutUs'
import Council from './components/Councils'
export default function Home() {
  return (
      <div className="relative">
     
      <Navigation />
   
      <Empower />
      <About />
      <Council />
      </div>
  );
}
