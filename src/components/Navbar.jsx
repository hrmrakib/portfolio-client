import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { IoHome } from "react-icons/io5";
import {
  FaDiagramProject,
  FaServicestack,
  FaUserGraduate,
} from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='relative'>
      <button className='md:hidden text-3xl p-4 text-white absolute top-2'>
        ☰
      </button>
      <nav className='hidden lg:block'>
        <aside
          id='logo-sidebar'
          className='fixed top-0 left-0 z-40 w-64 h-screen '
          // className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
          aria-label='Sidebar'
        >
          <div className='h-full px-3 py-4 overflow-y-auto bg-[#09101aca]'>
            <Link to='/' className='flex items-center justify-center mb-10'>
              <img
                src='./assets/js.png'
                className='h-6 me-3 sm:h-7'
                alt='Developer'
              />
              <span className='self-center text-xl font-semibold whitespace-nowrap text-gray-200'>
                Rakibul Alam
              </span>
            </Link>

            <ul className='font-medium grid gap-4 lg:gap-8 h-max side_navbar'>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#home'
                  className='flex items-center p-2 rounded text-white group'
                >
                  <IoHome className='size-4 text-gray-500 transition duration-75'></IoHome>
                  <span className='ms-3 capitalize'>Home</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#about'
                  className='flex items-center p-2 rounded text-white group'
                >
                  <FaUserGraduate className='fa-solid fa-address-card size-4 text-gray-500 transition duration-75' />
                  <span className='ms-3 capitalize'>About Me</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#service'
                  className='flex items-center p-2 rounded text-white group'
                >
                  <FaServicestack className='size-4 text-gray-500 transition duration-75' />
                  <span className='ms-3 capitalize'>Service</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#skill'
                  className='flex items-center p-2 rounded text-white group'
                >
                  <RiJavascriptFill className='size-4 text-gray-500 transition duration-75' />
                  <span className='ms-3 capitalize'>Skills</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#experience'
                  className='flex items-center p-2 rounded text-white group'
                >
                  <MdWorkHistory className='size-4 text-gray-500 transition duration-75' />
                  <span className='ms-3 capitalize'>Experience</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#portfolio'
                  className='flex items-center p-2 rounded text-white group'
                >
                  <FaDiagramProject className='fa-solid fa-briefcase size-4 text-gray-500 transition duration-75' />
                  <span className='ms-3 capitalize'>Portfolio</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#blog'
                  className='flex items-center p-2 rounded text-white group'
                >
                  <FaBlog className='size-4 text-gray-500 transition duration-75' />
                  <span className='ms-3 capitalize'>Blog</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#contact'
                  className='flex items-center p-2 rounded text-white group'
                >
                  <BiSolidContact className='fa-solid fa-link size-4 text-gray-500 transition duration-75' />
                  <span className='ms-3 capitalize'>Contact</span>
                </HashLink>
              </li>
            </ul>
          </div>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;
