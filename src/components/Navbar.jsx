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

const Navbar = () => {
  return (
    <>
      <nav className='bg-transparent'>
        <button
          data-drawer-target='logo-sidebar'
          data-drawer-toggle='logo-sidebar'
          aria-controls='logo-sidebar'
          type='button'
          className='fixed inline-flex items-center p-2 mt-2 ms-3 text-sm  text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        >
          <span className='sr-only'>Open sidebar</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              clipRule='evenodd'
              fillRule='evenodd'
              d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
            ></path>
          </svg>
        </button>

        <aside
          id='logo-sidebar'
          className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
          aria-label='Sidebar'
        >
          <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
            <Link to='/' className='flex items-center justify-center mb-10'>
              <img
                src='./assets/js.png'
                className='h-6 me-3 sm:h-7'
                alt='Developer'
              />
              <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
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
                  className='flex items-center p-2 text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <IoHome className='size-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></IoHome>
                  <span className='ms-3 capitalize'>Home</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#about'
                  className='flex items-center p-2 text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <FaUserGraduate className='fa-solid fa-address-card size-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                  <span className='ms-3 capitalize'>About Me</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#service'
                  className='flex items-center p-2 text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <FaServicestack className='size-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                  <span className='ms-3 capitalize'>Service</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#skill'
                  className='flex items-center p-2 text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <RiJavascriptFill className='size-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                  <span className='ms-3 capitalize'>Skills</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#experience'
                  className='flex items-center p-2 text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <MdWorkHistory className='size-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                  <span className='ms-3 capitalize'>Experience</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#portfolio'
                  className='flex items-center p-2 text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <FaDiagramProject className='fa-solid fa-briefcase size-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                  <span className='ms-3 capitalize'>Portfolio</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#blog'
                  className='flex items-center p-2 text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <FaBlog className='size-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                  <span className='ms-3 capitalize'>Blog</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  activeClassName='selected'
                  activeStyle={{ color: "red" }}
                  to='#contact'
                  className='flex items-center p-2 text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <BiSolidContact className='fa-solid fa-link size-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                  <span className='ms-3 capitalize'>Contact</span>
                </HashLink>
              </li>
            </ul>
          </div>
        </aside>
      </nav>
    </>
  );
};

export default Navbar;
