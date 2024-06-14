const Marque = () => {
  return (
    <section className='mt-28 -mb-1'>
      <marquee
        className='text-3xl md:text-5xl py-8 md:py-12 text-white bg-green-500 rounded-sm'
        // behavior=''
        direction=''
      >
        <span className='mr-4 ml-4'>JavaScript</span> ||
        <span className='mr-4 ml-4'>React</span> ||
        <span className='mr-4 ml-4'>Next</span> ||
        <span className='mr-4 ml-4'>TailwindCSS</span> ||
        <span className='mr-4 ml-4'>Firebase</span> ||
        <span className='mr-4 ml-4'>Node</span> ||
        <span className='mr-4 ml-4'>Express</span> ||
        <span className='mr-4 ml-4'>MongoDB</span> ||
        <span className='mr-4 ml-4'>Mongoose</span>
      </marquee>
    </section>
  );
};

export default Marque;
