import { MdCloudDownload } from "react-icons/md";
import handleDownload from "../utils/handleDownload";
import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Skill = () => {
  const [tract, setTract] = useState("technologies");

  const handleSkill = (view) => {
    setTract(view);
  };

  return (
    <section
      id='skill'
      className='my-12 lg:my-24 bg-[#09101A] px-8 py-10 rounded-lg'
    >
      <div className='text-center'>
        <h3 className='color-primary text-2xl mb-3 tracking-wide'>MY Skill</h3>
        <h2 className='text-3xl lg:text-5xl font-extrabold text-white leading-snug max-w-[790px] mx-auto'>
          Bringing your vision to life with precision and passion
        </h2>
      </div>
      <div
        id='experience'
        className='flex flex-wrap gap-5 justify-center my-12'
      >
        <button
          onClick={handleDownload}
          type='button'
          className='text-white flex items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2'
          // className='flex items-center gap-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2 text-center'
        >
          <span>Download CV</span> <MdCloudDownload className='text-xl' />
        </button>

        <button
          onClick={() => handleSkill("technologies")}
          type='button'
          className={`text-white ${
            tract === "technologies" ? "bg-green-500" : "bg-gray-800"
          } hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg  dark:shadow-lg  font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2`}
        >
          Technologies
        </button>

        <button
          onClick={() => handleSkill("education")}
          type='button'
          className={`text-white ${
            tract === "education" ? "bg-green-500" : "bg-gray-800"
          } hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg  dark:shadow-lg  font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2`}
        >
          Education
        </button>
        <button
          onClick={() => handleSkill("biography")}
          type='button'
          className={`text-white ${
            tract === "biography" ? "bg-green-500" : "bg-gray-800"
          } hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg  dark:shadow-lg  font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2`}
        >
          Biography
        </button>
      </div>

      {/* <!-- education content --> */}
      {tract === "education" && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
          <div className='border border-gray-600 p-5 rounded-lg'>
            <h3>
              <span className='color-primary text-2xl'> &gt;&gt; </span>
              <span className='text-2xl text-white border-b-2 border-[#55e6a5]'>
                BBA
              </span>
            </h3>
            <div className='py-6 px-7'>
              <h2 className='text-2xl text-white mb-1'>
                National University of Bangladesh
              </h2>
              <h4 className='text-xl text-white mb-2'>2021 - 2025</h4>
              <p>
                <strong>Subject:</strong> Management
              </p>
              <strong>University:</strong> National University
            </div>
          </div>
          <div className='border border-gray-600 p-5 rounded-lg'>
            <h3>
              <span className='color-primary text-2xl'> &gt;&gt; </span>
              <span className='text-2xl text-white border-b-2 border-[#55e6a5]'>
                HSC
              </span>
            </h3>
            <div className='py-6 px-7'>
              <h2 className='text-2xl text-white mb-1'>
                Dhaka Board of Bangladesh
              </h2>
              <h4 className='text-xl text-white mb-2'>2018 - 2020</h4>
              <p>
                <strong>Subject:</strong> Business Studies
              </p>
              <strong>College:</strong> Gazipur Commerce College
            </div>
          </div>
          <div className='border border-gray-600 p-5 rounded-lg'>
            <h3>
              <span className='color-primary text-2xl'> &gt;&gt; </span>
              <span className='text-2xl text-white border-b-2 border-[#55e6a5]'>
                SSC
              </span>
            </h3>
            <div className='py-6 px-7'>
              <h2 className='text-2xl text-white mb-1'>
                Dhaka Board of Bangladesh
              </h2>
              <h4 className='text-xl text-white mb-2'>2018</h4>
              <p>
                <strong>Subject:</strong> Business Studies
              </p>
              <strong>School:</strong> Kawaltia Zahir Uddin High School
            </div>
          </div>
          <div className='border border-gray-600 p-5 rounded-lg'>
            <h3>
              <span className='color-primary text-2xl'> &gt; &gt; </span>
              <span className='text-2xl text-white border-b-2 border-[#55e6a5]'>
                JSC
              </span>
            </h3>
            <div className='py-6 px-7'>
              <h2 className='text-2xl text-white mb-1'>
                Dhaka Board of Bangladesh
              </h2>
              <h4 className='text-xl text-white mb-2'>2015</h4>
              <p>
                <strong>Subject:</strong> General Studies
              </p>
              <strong>School:</strong> Kawaltia Zahir Uddin High School
            </div>
          </div>
        </div>
      )}

      {/* <!-- biography  --> */}
      {tract === "biography" && (
        <div className='bg- p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-10'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-1/3 w-full flex justify-center md:justify-start mb-6 md:mb-0'>
              <img
                src='https://i.ibb.co/w7Jx7Bj/frontend-developer-rakibul.jpg'
                alt='Profile'
                className='rounded-full w-48 h-48 object-cover'
              />
            </div>
            <div className='md:w-2/3 w-full md:pl-8'>
              <h2 className='text-4xl font-bold mb-4'>Md Rakibul Alam</h2>
              <p className='text-gray-300 mb-4'>
                Hello! I'm Rakibul, a passionate web developer with a love for
                creating beautiful and functional web applications. I have
                developed a strong foundation in modern web technologies. I
                enjoy working on innovative projects and constantly strive to
                improve my skills and learn new technologies.
              </p>
              <p className='text-gray-400 mb-4'>
                In my free time, I like to explore new tech trends, contribute
                to open-source projects, and enjoy outdoor activities.
              </p>
              <div className='live-link flex gap-3 *:text-xl *:border-none'>
                <a
                  className='social'
                  href='https://www.linkedin.com/in/hrmrakib/'
                  data-link='linkedin'
                >
                  <span className='filled filled2'></span>
                  <FaLinkedin className='text-xl text-black z-50 icon' />
                </a>
                <a
                  className='social'
                  href='https://www.facebook.com/hrmrakib'
                  data-link='facebook'
                >
                  <span className='filled filled2'></span>
                  <FaFacebook className='text-xl text-black z-50 icon' />
                </a>
                <a
                  className='social'
                  href='https://github.com/hrmrakib'
                  data-link='github'
                >
                  <span className='filled filled2'></span>
                  <FaGithub className='text-xl text-black z-50 icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <!-- experience and tech --> */}
      {tract === "technologies" && (
        <div>
          <h3 className='text-xl text-slate-200 text-center'>
            Which Technologies is My Hands On
          </h3>
          <div className='flex flex-wrap justify-center gap-5 my-8'>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4 rounded-badge'
                  src='./assets/tech/html.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>HTML</span>
            </div>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4'
                  src='./assets/tech/css.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>CSS</span>
            </div>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4'
                  src='./assets/tech/javascript.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>JavaScript</span>
            </div>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4'
                  src='./assets/tech/typescript.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>TypeScript</span>
            </div>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4 rotate'
                  src='./assets/tech/reactjs.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>ReactJS</span>
            </div>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4'
                  src='./assets/tech/nextjs.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>NextJS</span>
            </div>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4'
                  src='./assets/tech/redux.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>Redux</span>
            </div>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4'
                  src='./assets/tech/git.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>Git & GitHub</span>
            </div>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4'
                  src='./assets/tech/figma.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>Figma</span>
            </div>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4'
                  src='./assets/tech/tailwind.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>TailwindCSS</span>
            </div>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4'
                  src='./assets/tech/nodejs.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>NodeJS</span>
            </div>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4'
                  src='./assets/tech/express.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>Expressjs</span>
            </div>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4'
                  src='./assets/tech/mongodb.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>MongoDB</span>
            </div>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4 rounded-badge'
                  src='./assets/tech/mongoose.png'
                  alt=''
                />
              </div>
              <span className='text-center text-white'>Mongoose</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skill;
