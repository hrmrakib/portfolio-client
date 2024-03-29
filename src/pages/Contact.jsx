const Contact = () => {
  return (
    <section id='contact' className='my-12 lg:my-24 max-w-[600px] mx-auto'>
      <h2 className='text-center text-3xl lg:text-4xl font-bold'>
        Take A Coffee & Chat with Me
      </h2>
      <div className='flex md:items-center flex-col gap-6 md:flex-row md:justify-around my-14'>
        <a
          href='mailto:hrmrakibs@gmail.com'
          className='flex items-center gap-3 bg-violet-200 opacity-80 px-3 py-2 rounded-md'
        >
          <img className='w-6' src='./assets/mail.png' alt='mail' />
          <span className='text-gray-800'>hrmrakibs@gmail.com</span>
        </a>
        <a
          href='tel:+8801792063488'
          className='flex items-center gap-3 bg-blue-200 px-3 py-2 rounded-md'
        >
          <img className='w-6' src='./assets/call.png' alt='call' />
          <span className='text-gray-800'>+8801792063488</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
