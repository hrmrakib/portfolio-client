import { GoDotFill } from "react-icons/go";

const Service = () => {
  return (
    <>
      <section id='service' className='my-12 lg:my-32'>
        <div className='text-center'>
          <h3 className='color-primary text-2xl mb-3 mt-12'>MY SERVICE</h3>
          <h2 className='text-3xl lg:text-5xl font-bold text-white leading-snug max-w-[790px] mx-auto'>
            Bringing your vision to life with precision and passion
          </h2>
        </div>
        {/* <!-- service card --> */}
        <div className='my-12 lg:my-32 grid gap-8 grid-cols-1 lg:grid-cols-3 *:mb-12'>
          <div className='bg-[#09101A] p-6 relative rounded-lg transition duration-200 delay-100 hover:-translate-y-12'>
            <div className='absolute flex top-5 right-5 *:text-3xl'>
              <GoDotFill className='text-red-600 text-sm' />
              <GoDotFill className='text-yellow-600 text-sm' />
              <GoDotFill className='text-green-600 text-sm' />
            </div>
            <img
              className='w-20 h-20 absolute -top-12 rounded-xl'
              src='./assets/programming-b.jpg'
              alt=''
            />
            <h2 className='text-xl text-white mb-3 mt-10'>
              Frontend Development
            </h2>
            <p className='my-p'>
              Frontend developer creating seamless, user-friendly interfaces
              with creativity, precision, and a passion for enhancing online
              experiences.
            </p>
          </div>
          <div className='bg-[#09101A] p-6 relative rounded-lg transition duration-200 delay-100 hover:-translate-y-12'>
            <div className='absolute flex top-5 right-5 *:text-3xl'>
              <GoDotFill className='text-red-600 text-sm' />
              <GoDotFill className='text-yellow-600 text-sm' />
              <GoDotFill className='text-green-600 text-sm' />
            </div>
            <img
              className='w-20 h-20 absolute -top-12 rounded-xl'
              src='./assets/5C.jpg'
              alt=''
            />
            <h2 className='text-xl text-white mb-3 mt-10'>
              React Application Development
            </h2>
            <p className='my-p'>
              Crafting dynamic, high-performance React applications with clean
              code, intuitive design, and seamless user experiences for diverse
              audiences.
            </p>
          </div>

          <div className='bg-[#09101A] p-6 relative rounded-lg transition duration-200 delay-100 hover:-translate-y-12'>
            <div className='absolute flex top-5 right-5 *:text-3xl'>
              <GoDotFill className='text-red-600 text-sm' />
              <GoDotFill className='text-yellow-600 text-sm' />
              <GoDotFill className='text-green-600 text-sm' />
            </div>
            <img
              className='w-20 h-20 absolute -top-12'
              src='./assets/app-development.png'
              alt=''
            />
            <h2 className='text-xl text-white mb-3 mt-10'>
              Full-Stack Development
            </h2>
            <p className='my-p'>
              Building robust, scalable web applications with seamless frontend
              and backend integration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
