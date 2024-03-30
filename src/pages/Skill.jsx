import { MdCloudDownload } from "react-icons/md";
import handleDownload from "../utils/handleDownload";
import { useState } from "react";

const Skill = () => {
  const [tract, setTract] = useState("experience");

  const handleSkill = (view) => {
    setTract(view);
  };
  console.log(typeof tract);

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
          className='text-white flex items-center gap-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2'
        >
          <span>Download CV</span> <MdCloudDownload className='text-xl' />
        </button>
        <button
          onClick={() => handleSkill("experience")}
          type='button'
          className='text-white bg-[#141C27] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg  dark:shadow-lg  font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2'
        >
          Experience
        </button>
        <button
          onClick={() => handleSkill("education")}
          type='button'
          className='text-white bg-[#141C27] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg  dark:shadow-lg  font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2'
        >
          Education
        </button>
        <button
          onClick={() => handleSkill("biography")}
          type='button'
          className='text-white bg-[#141C27] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg  dark:shadow-lg  font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2'
        >
          Biography
        </button>
      </div>

      {/* <!-- education content --> */}
      {tract === "education" && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
          <div className='border p-5 rounded-lg'>
            <h3>
              <span className='color-primary text-2xl'> &gt;&gt; </span>
              <span className='text-2xl text-white border-b-2 border-[#55e6a5]'>
                MBA
              </span>
            </h3>
            <div className='py-6 px-7'>
              <h2 className='text-2xl text-white mb-1'>
                National University of Bangladesh
              </h2>
              <h4 className='text-xl text-white mb-2'>2021 - 2025</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elitconsectetur adipisicing elit. Facilis quasi necessitatibus
                repellendus?
              </p>
            </div>
          </div>
          <div className='border p-5 rounded-lg'>
            <h3>
              <span className='color-primary text-2xl'> &gt;&gt; </span>
              <span className='text-2xl text-white border-b-2 border-[#55e6a5]'>
                HSC
              </span>
            </h3>
            <div className='py-6 px-7'>
              <h2 className='text-2xl text-white mb-1'>Dhaka Board</h2>
              <h4 className='text-xl text-white mb-2'>2018 - 2020</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elitconsectetur adipisicing elit. Facilis quasi necessitatibus
                repellendus?
              </p>
            </div>
          </div>
          <div className='border p-5 rounded-lg'>
            <h3>
              <span className='color-primary text-2xl'> &gt;&gt; </span>
              <span className='text-2xl text-white border-b-2 border-[#55e6a5]'>
                SSC
              </span>
            </h3>
            <div className='py-6 px-7'>
              <h2 className='text-2xl text-white mb-1'>Dhaka Board</h2>
              <h4 className='text-xl text-white mb-2'>2018</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elitconsectetur adipisicing elit. Facilis quasi necessitatibus
                repellendus?
              </p>
            </div>
          </div>
          <div className='border p-5 rounded-lg'>
            <h3>
              <span className='color-primary text-2xl'> &gt; &gt; </span>
              <span className='text-2xl text-white border-b-2 border-[#55e6a5]'>
                JSC
              </span>
            </h3>
            <div className='py-6 px-7'>
              <h2 className='text-2xl text-white mb-1'>Dhaka Board</h2>
              <h4 className='text-xl text-white mb-2'>2015</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elitconsectetur adipisicing elit. Facilis quasi necessitatibus
                repellendus?
              </p>
            </div>
          </div>
        </div>
      )}

      {/* <!-- biography  --> */}
      {tract === "biography" && (
        <div>
          <div>
            <h2 className='text-white text-2xl font-medium mb-2'>
              Briefly Describe My Biography
            </h2>
            <p>
              <span className='text-slate-200 mb-1'>Assalamualikum,</span>{" "}
              <br /> I am Rakibul, born and grow at Gazipur in Bangladesh. I am
              starting my education life in my family and enroll a kindergarten
              school(2008). After 2 years, I enroll a govt primary school in my
              village and passed primary level in 2012. I study 5 years a medium
              school in my village and passed out here in 2018. I admit a modern
              and higher studied college in main city area and invest 2 years
              with dedication and hard working, and passed it here 2020. Then, I
              admit a university for higher study in the subject of Management
              and running now.
            </p>
            <p className='mt-3'>
              I am a practicing muslim, follow basic rules of my religious. I
              woke up everyday early in the morning for praying. I am very
              careful about my work. I keep my promise. I am honest in work and
              stay away from lies.
            </p>
          </div>
        </div>
      )}

      {/* <!-- experience and tech --> */}
      {tract === "experience" && (
        <div>
          <h2 className='mb-5 text-center'>
            I have not joined any job till now. May be my first job in your
            company. Or maybe another company. But I am fully prepared for the
            job.
          </h2>

          <h3 className='text-xl text-slate-200 text-center'>
            Which Technologies is My Hands On
          </h3>
          <div className='flex flex-wrap justify-center gap-5 my-8'>
            <div className='flex flex-col justify-center parent p-2'>
              <div className='w-24 h-24 rounded-full bg-[#2F3046] mb-2 child'>
                <img
                  className='w-full p-4'
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Skill;
