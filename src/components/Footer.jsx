import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='p-4 lg:p-12 sm:ml-64 bg-[#02050A] text-[#a2a2a2]'>
      <form
        action=''
        className='flex flex-col gap-5 *:border *:py-3 *:px-2 *:bg-transparent *:rounded'
      >
        <input className='' type='text' placeholder='Your Name' />
        <input className='' type='email' placeholder='Your Email' />
        <input className='' type='text' placeholder='Subject' />
        <textarea
          className='h-24 md:h-auto p-3 text-white'
          placeholder='Your Message'
          name=''
          id=''
          cols='30'
          rows='8'
        ></textarea>
      </form>
      <div className='flex justify-center my-8'>
        <button
          className='bg-green-600 text-white w-full md:max-w-max px-6 py-3 rounded-md'
          type='button'
        >
          Submit
        </button>
      </div>

      <div className='border-b-[1px] border-gray-600 my-12'></div>

      <div className='live-link flex justify-center gap-3 *:text-xl *:border-none'>
        <a className='social' href='#' data-link='linkedin'>
          <span className='filled filled2'></span>
          <FaLinkedin className='text-xl text-black z-50 icon' />
        </a>
        <a className='social' href='#' data-link='facebook'>
          <span className='filled filled2'></span>
          <FaFacebook className='text-xl text-black z-50 icon' />
        </a>
        <a className='social' href='#' data-link='github'>
          <span className='filled filled2'></span>
          <FaGithub className='text-xl text-black z-50 icon' />
        </a>
      </div>

      <p className='copyright mt-10'>
        &copy; Rakibul 2024 | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
