import github from "/assets/github.png";
import google from "/assets/google.png";
import facebook from "/assets/facebook.png";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useSocialSign from "../hooks/useSocialSign";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [eyePassword, setEyePassword] = useState(false);
  const [anyError, setAnyError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { handleGoogleIn, handleGithubIn, handleFacebookIn } = useSocialSign();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, []);

  const onSubmit = (data) => {
    const { email, password } = data;

    if (rememberMe) {
      localStorage.setItem("userEmail", email);
    } else {
      localStorage.removeItem("userEmail");
    }

    setAnyError("");
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential?.user;
        console.log("login user", user);
        navigate("/");
      })
      .catch((err) => {
        setAnyError(err.message);
      });
  };

  const handleGoogle = () => {
    handleGoogleIn();
  };

  const handleGithub = () => {
    handleGithubIn();
  };
  const handleFacebook = () => {
    handleFacebookIn();
  };

  return (
    <div className='bg-[#F2F3F3] bg-cover flex items-center justify-center min-h-screen'>
      <div className='relative min-h-[calc(100vh-100px)] max-w-xl px-20 py-5 mx-auto bg-white border rounded-lg shadow'>
        <Link to='/' className='absolute left-1 top-1 border rounded-full p-2'>
          <IoHomeOutline className='text-2xl text-purple-600' />
        </Link>

        <div className='flex flex-col items-center justify-center'>
          <img
            className='size-12 mb-2'
            src='https://i.ibb.co/MB4svxG/code.png'
            alt=''
          />
          <h2 className='text-2xl font-bold text-gray-800'>Welcome back</h2>
          <p className='text-gray-600 font-medium'>
            Please enter your detail to sign in.
          </p>
        </div>

        <div className='my-5 flex items-center justify-between gap-2'>
          <div
            onClick={handleGithub}
            className='px-4 cursor-pointer shadow-sm flex items-center justify-between border rounded-md'
          >
            <img className='size-10 p-2' src={github} alt='github' />
          </div>
          <div
            onClick={handleGoogle}
            className='px-4 cursor-pointer shadow-sm flex items-center justify-between border rounded-md'
          >
            <img className='size-10 p-2' src={google} alt='google' />
          </div>
          <div
            onClick={handleFacebook}
            className='px-4 cursor-pointer shadow-sm flex items-center justify-between border rounded-md'
          >
            <img className='size-10 p-2' src={facebook} alt='facebook' />
          </div>
        </div>

        <div className='divider'>
          <span className='text-xs'>OR</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className='font-semibold text-gray-700 mb-1'>Email address</h2>
          <label className='input input-bordered flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
              <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
            </svg>
            <input
              type='text'
              className='grow'
              defaultValue={email}
              {...register("email", { required: true })}
              placeholder='Enter your email '
            />
            {errors.email && (
              <span className='text-red-600 font-medium'>
                Your email is required
              </span>
            )}
          </label>

          <h2 className='mt-3 mb-1 font-semibold text-gray-700'>Password</h2>
          <label className='relative input input-bordered flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                clipRule='evenodd'
              />
            </svg>

            <input
              type={eyePassword ? "text" : "password"}
              {...register("password", { required: true })}
              className='grow'
              placeholder='Password '
            />
            <span
              onClick={() => setEyePassword(!eyePassword)}
              className='absolute right-2 cursor-pointer'
            >
              {eyePassword ? <FaEyeSlash /> : <FaRegEye />}
            </span>
            {errors.password && (
              <span className='text-red-600 font-medium'>
                Password is required
              </span>
            )}
          </label>
          <p className='text-red-500 font-semibold my-1'>{anyError}</p>
          <div className='my-5 flex items-center justify-between gap-4'>
            <div className='flex items-center'>
              <input
                id='default-checkbox'
                type='checkbox'
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2'
              />
              <label
                htmlFor='default-checkbox'
                className='ms-2 text-sm font-medium text-gray-900 '
              >
                Remember me
              </label>
            </div>

            <p className='font-semibold underline'>Forget password?</p>
          </div>

          <button
            type='submit'
            className='w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2'
          >
            <span className='w-max mx-auto'>SignIn</span>
          </button>
        </form>

        <p className='mt-3'>
          Don't have an account yet?{" "}
          <Link to='/signup' className='font-semibold'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
