import Image from "next/image";
import Navigation  from "./components/Navigation";
import Empower from './components/Empower'
import About from './components/AboutUs'
import Council from './components/Councils'
import Happening from "./components/Whats_happening";
import Member from "./components/member";
import Stories from './components/stories'
import News from './components/News'
import Donate from './components/Donate'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function Home() {
  return (
      <div className="relative">
     
      <Navigation />
      <Empower />
      <About />
      <Council />
      <Happening />
      <Member />
      <Stories/>
      <News/>
      <Donate/>
      <Contact/>
      <Footer />
      </div>
  );
}

