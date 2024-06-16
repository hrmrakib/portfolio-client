const About = () => {
  return (
    <>
      <section id='about' className='my-12 lg:my-32'>
        <div>
          <h3 className='color-primary text-xl font-medium mb-3'>About Me</h3>
          <h2 className='text-3xl lg:text-5xl font-semibold text-white leading-normal'>
            Crafting stories through design and <br />
            innovation
          </h2>
        </div>

        <div className='grid gap-20 lg:grid-cols-2 my-16'>
          <div className='grid gap-20'>
            <div>
              <img className='w-28 mb-8' src='./assets/ambition.png' alt='' />
              <h2 className='text-3xl font-semibold text-white mb-3'>
                My Ambition
              </h2>
              <p className='my-p'>
                Passionate web developer dedicated to crafting visually amazing
                and user-friendly websites. Excited to collaborate with dynamic
                teams, leveraging cutting-edge technologies to bring innovative
                digital solutions to life.
              </p>
            </div>
            <div>
              <img className='w-28 mb-8' src='./assets/target.png' alt='' />
              <h2 className='text-3xl font-semibold text-white mb-3'>
                My Purpose
              </h2>
              <p className='my-p'>
                To utilize my creativity and technical skills in web development
                to create impactful digital experiences, collaborating with
                diverse teams and staying ahead in a dynamic industry to drive
                meaningful innovation.
              </p>
            </div>
          </div>

          <div className='relative w-full h-[350px] md:h-auto about-bg bg-center bg-cover rounded-md'>
            <div className='p-8 text-white'>
              <h2 className='text-xl md:text-4xl mb-1'>Md Rakibul Alam</h2>
              <h3 className='text-sky-500 text-xl mb-2 font-semibold'>
                Frontend Developer
              </h3>
              <p className='text-pink-300'>
                <i className='fa-solid fa-location-dot mr-2'></i> Gazipur,
                Bangladesh
              </p>
              <div className='mt-3 border-l-2 border-x-green-600'>
                <p className='my-p ml-2'>
                  Studied at National University of Bangladesh
                </p>
                <p className='my-p ml-2'>Subject: Management</p>
                {/* <p className='my-p ml-2'>Running: 3rd Years</p> */}
              </div>
            </div>

            <div className='w-20 md:w-36 absolute bottom-2 right-2  rounded-full shadow-[0_35px_60px_-15px_rgba(100,00,220,0.3)]'>
              <img
                className='w-20 md:w-36 profile'
                src='./assets/rakib.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
