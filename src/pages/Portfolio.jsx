import { FaEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Portfolio = () => {
  const axiosSecure = useAxiosSecure();

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
          <li>React</li>
          <li>Next</li>
          <li>MERN</li>
          <li className='!bg-blue-600 !text-white'>All</li>
        </ul>
      </div>
      <div className='mt-12 grid justify-center  md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {projects.map((project) => (
          <div
            key={project._id}
            className='card max-w-80 bg-white p-4 rounded-xl'
          >
            <div className='relative'>
              <img
                className='w-full h-48 rounded-lg'
                src={project?.image}
                alt=''
              />
              <span className='relative bottom-5 left-6 px-4 pt-2 pb-4 bg-white text-gray-600 text-sm font-normal rounded-t-xl'>
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
            <p className='desc pb-2'>{project?.shortDescription}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
