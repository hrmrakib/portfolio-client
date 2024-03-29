const Blog = () => {
  return (
    <>
      <section id='blog' className='mb-24 bg-[#09101A] px-8 py-10 rounded-lg'>
        <div className='text-center'>
          <h3 className='color-primary text-2xl mb-3'>MY Blog</h3>
          <h2 className='text-3xl lg:text-5xl text-left text-white font-bold leading-snug max-w-[790px] mx-auto'>
            Rafting Unique Experiences Inspiring Connections
          </h2>
        </div>

        {/* <!-- blog lists --> */}
        <div className='my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
          <div className='blog'>
            <div className='relative mb-3'>
              <img
                className='rounded w-full h-56'
                src='./assets/computer.jpg'
                alt=''
              />
              <p className='publish absolute top-5 right-4 text-white bg-emerald-600 px-3 py-2 rounded-lg'>
                10 Jan
              </p>
            </div>
            <p>
              <i className='fa-solid fa-circle-user text-green-600 mr-1'></i> By
              Admin
            </p>
            <h2 className='text-xl text-gray-200 my-2'>
              Where Passion and Purpose Collide
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and types etting
              in our company here thisn me [….]
            </p>
          </div>
          <div className='blog'>
            <div className='relative mb-3'>
              <img
                className='rounded w-full h-56'
                src='./assets/occupation.jpg'
                alt=''
              />
              <p className='publish absolute top-5 right-4 text-white bg-emerald-600 px-3 py-2 rounded-lg'>
                10 Jan
              </p>
            </div>
            <p>
              <i className='fa-solid fa-circle-user text-green-600 mr-1'></i> By
              Admin
            </p>
            <h2 className='text-xl text-gray-200 my-2'>
              Where Passion and Purpose Collide
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and types etting
              in our company here thisn me [….]
            </p>
          </div>
          <div className='blog'>
            <div className='relative mb-3'>
              <img
                className='rounded w-full h-56'
                src='./assets/5C.jpg'
                alt=''
              />
              <p className='publish absolute top-5 right-4 text-white bg-emerald-600 px-3 py-2 rounded-lg'>
                10 Jan
              </p>
            </div>
            <p>
              <i className='fa-solid fa-circle-user text-green-600 mr-1'></i> By
              Admin
            </p>
            <h2 className='text-xl text-gray-200 my-2'>
              Where Passion and Purpose Collide
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and types etting
              in our company here thisn me [….]
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
