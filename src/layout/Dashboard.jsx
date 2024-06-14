import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import useAdmin from "../hooks/useAdmin";

const navLinks = (
  <>
    <NavLink
      to='/dashboard/addSkill'
      className='block py-2.5 px-4 hover:bg-gray-200'
    >
      Add Skill
    </NavLink>
    <NavLink
      to='/dashboard/allSkills'
      className='block py-2.5 px-4 hover:bg-gray-200'
    >
      All Skills
    </NavLink>

    <NavLink
      className='block py-2.5 px-4 hover:bg-gray-200'
      to='/dashboard/addProject'
    >
      Add Project
    </NavLink>
    <NavLink
      className='block py-2.5 px-4 hover:bg-gray-200'
      to='/dashboard/allProjects'
    >
      All Projects
    </NavLink>
    <NavLink
      className='block py-2.5 px-4 hover:bg-gray-200'
      to='/dashboard/allProjects'
    >
      All Message
    </NavLink>
  </>
);

const Dashboard = () => {
  //   const { user, logOut } = useAuth();
  //   const [isAdmin] = useAdmin();
  const navigate = useNavigate();

  const isAdmin = true;
  const user = true;

  // const handleLogOut = async () => {
  //   await logOut();
  // };

  return (
    <div className='flex h-screen bg-gray-100 '>
      {/* sidebar */}
      <div className='lg:w-64 lg:fixed lg:h-full hidden lg:block bg-white  shadow-md'>
        <div className='p-6 text-center text-xl font-bold '>
          <Link to='/' className='flex items-center justify-center'>
            <img
              src='./assets/js.png'
              className='h-6 me-3 sm:h-7'
              alt='Developer'
            />
            <span className='self-center text-xl font-semibold whitespace-nowrap text-gray-700'>
              Rakibul Alam
            </span>
          </Link>
        </div>
        {/* large device menu */}
        <nav className='mt-10 *:text-black'>{navLinks}</nav>
      </div>

      {/* main content */}
      <div className='lg:ml-64 flex-1 lg:overflow-y-auto flex flex-col'>
        {/* top navbar */}
        <header className='bg-white  shadow-md p-4'>
          <div className='max-w-7xl mx-auto flex justify-between items-center'>
            {/* small device menu */}
            <div className='dropdown inline-block lg:hidden'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content *:text-black *: mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                {navLinks}
              </ul>
            </div>

            <h1 className='text-xl md:text-2xl font-bold text-black'>
              Dashboard
            </h1>

            {/* right-side profile */}
            <div className='flex items-center gap-2'>
              <div className='dropdown dropdown-end'>
                <div tabIndex={0} role='button' className='m-1'>
                  <img
                    className='w-12 h-12 mr-3 rounded-full border-2 border-white dark:border-blue-500'
                    src={user?.photoURL}
                    alt=''
                  />
                </div>
                <ul
                  tabIndex={0}
                  className='flex px-2 py-3 bg-white flex-col gap-2 dropdown-content z-[1] menu shadow rounded w-max'
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
              <span className='hidden md:flex font-semibold '>
                {user?.displayName}
              </span>
            </div>
          </div>
        </header>

        {/* children display here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
