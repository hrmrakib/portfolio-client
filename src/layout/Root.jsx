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
import Hero from "./../components/Hero";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Root = () => {
  const location = useLocation();
  const { user, logOut } = useAuth();

  useEffect(() => {
    const path = location.hash.substring(1);
    const title = path.charAt(0).toUpperCase() + path.slice(1);
    document.title = `Rakibul | ${title || "Home"} View`;
  }, [location?.hash]);

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <div>
      <Home />
      <main className='relative lg:ml-64 bg-[#02050A] text-[#a2a2a2]'>
        <Hero />
        {/* <div className='absolute top-2 right-2 lg:right-4'>
          {user ? (
            <div className='flex items-center gap-4'>
              <div className='dropdown dropdown-end'>
                <div tabIndex={0} role='button' className='m-1'>
                  <img
                    className='size-8 rounded-full profile'
                    src={user?.photoURL}
                    alt=''
                  />
                </div>
                <ul
                  tabIndex={0}
                  className='flex bg-white flex-col gap-2 dropdown-content z-[1] menu shadow rounded w-max'
                >
                  <button
                    onClick={handleLogOut}
                    type='button'
                    className='w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center me-2'
                  >
                    Logout
                  </button>
                </ul>
              </div>
            </div>
          ) : (
            <Link to='/signin'>
              <img
                className='size-8 cursor-pointer'
                src='https://i.ibb.co/nf0km0T/user-1.png'
                alt=''
              />
            </Link>
          )}
        </div> */}
        <div className='p-4 lg:px-12'>
          <About />
          <Service />
          <Skill />
          <Portfolio />
          <Marque />
          <Blog />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Root;
