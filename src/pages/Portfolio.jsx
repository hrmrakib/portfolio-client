import { FaEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const axiosSecure = useAxiosSecure();
  const [projectLength, setProjectLength] = useState(3);

  const {
    data: projects = [],
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["portfolio"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-projects");
      return res.data;
    },
  });

  if (isFetching) {
    return <span>Loading ....</span>;
  }
  const handleShowMore = () => {
    return setProjectLength((prev) => prev + 3);
  };

  console.log(projectLength);

  return (
    <section id='portfolio' className='my-12 lg:my-32'>
      <div>
        <h3 className='color-primary text-xl font-medium mb-3'>
          My Recent Portfolio
        </h3>
        <h2 className='text-3xl lg:text-5xl font-semibold text-white leading-normal'>
          Elevate your brand to new heights with our portfolio expertise
        </h2>
      </div>

      <div className='my-14'>
        <ul className='flex items-center flex-wrap justify-center gap-3 *:bg-white *:px-4 *:py-2 *:text-gray-800 *:rounded-lg'>
          <li className='cursor-not-allowed'>React</li>
          <li className='cursor-not-allowed'>Next</li>
          <li className='cursor-pointer'>MERN</li>
          <li className='!bg-blue-600 !text-white cursor-pointer'>All</li>
        </ul>
      </div>

      <div className='mt-12 grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {projects.slice(0, projectLength).map((project) => (
          <div
            key={project._id}
            className='card max-w-80 bg-[#fefefcfa] p-5 rounded-xl'
          >
            <div className='relative'>
              <img
                className='w-full h-48 rounded-lg'
                src={project?.image}
                alt={project?.name + " - image"}
              />
              <span className='relative bottom-5 left-6 px-3 py-2 bg-[#fefefcfa] text-gray-600 text-sm font-normal rounded-t-xl'>
                {project?.tags}
              </span>

              <div className='flex gap-3 absolute top-4 right-4'>
                <div className='live-link'>
                  <a
                    href={project?.liveLink}
                    aria-label='Spotify'
                    data-link='live'
                    target='_blank'
                  >
                    <div className='filled'></div>
                    <FaEye className='text-2xl text-black z-50 icon' />
                  </a>
                  <div className='tooltip'>Live Preview</div>
                </div>
                <div className='live-link'>
                  <a
                    className='hover:text-white'
                    href={project?.githubLink}
                    aria-label='Spotify'
                    data-link='code'
                    target='_blank'
                  >
                    <div className='filled'></div>
                    <FaGithub className='text-2xl text-black z-50 icon' />
                  </a>
                  <div className='tooltip'>Source Code</div>
                </div>
              </div>
            </div>
            <h3 className='text-2xl text-black font-semibold mb-2'>
              {project?.name}
            </h3>
            <p className='desc pb-2 text-gray-700'>
              {project?.shortDescription}
            </p>
          </div>
        ))}
      </div>

      {projects.length >= projectLength ? (
        <div className='mt-10 flex justify-center items-center'>
          <button
            onClick={handleShowMore}
            type='button'
            className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
          >
            Show More
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default Portfolio;
