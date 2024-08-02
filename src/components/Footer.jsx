import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='px-4 lg:p-12 sm:ml-64 bg-[#02050A] text-[#a2a2a2]'>
      <div className='border-t border-gray-700 w-[100%] mx-auto'></div>
      <div className='pt-12 flex items-center justify-between'>
        <p className='copyright'>&copy; Rakibul 2024 | All Rights Reserved</p>

        <div className='live-link flex justify-center gap-3 *:text-xl *:border-none'>
          <a
            className='social'
            target='_blank'
            href='https://www.linkedin.com/in/hrmrakib/'
            data-link='linkedin'
          >
            <span className='filled filled2'></span>
            <FaLinkedin className='text-xl text-black z-50 icon' />
          </a>
          <a
            className='social'
            target='_blank'
            href='https://www.facebook.com/hrmrakib'
            data-link='facebook'
          >
            <span className='filled filled2'></span>
            <FaFacebook className='text-xl text-black z-50 icon' />
          </a>
          <a
            className='social'
            target='_blank'
            href='https://github.com/hrmrakib'
            data-link='github'
          >
            <span className='filled filled2'></span>
            <FaGithub className='text-xl text-black z-50 icon' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
