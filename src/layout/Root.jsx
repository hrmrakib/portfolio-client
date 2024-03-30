import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Marque from "../components/Marque";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Service from "../pages/Service";
import Skill from "../pages/Skill";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.hash.substring(1);
    const title = path.charAt(0).toUpperCase() + path.slice(1);
    document.title = `Rakibul | ${title || "Home"} View`;
  }, [location.hash]);
  return (
    <div>
      <Home />
      <main className='p-4 lg:px-12 sm:ml-64 bg-[#02050A] text-[#a2a2a2]'>
        <About />
        <Service />
        <Skill />
        <Portfolio />
        <Marque />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
