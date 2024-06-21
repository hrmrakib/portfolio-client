import { useLoaderData } from "react-router-dom";

const BlogDetail = () => {
  const blog = useLoaderData();

  return (
    <div className='bg-[#09101A] min-h-screen'>
      <div className='w-[70%] mx-auto pt-20'>
        <img className='rounded w-full h-96' src={blog?.image} alt='' />

        {/* title */}
        <h2 className='text-4xl text-gray-200 my-5'>{blog?.headingTitle}</h2>

        <p className='text-xl text-gray-300 my-5'>{blog?.summery}</p>

        <ul className='py-7'>
          {blog?.points?.map((point, i) => (
            <ol key={point.id} type='1' className='mb-8'>
              <h2 className='text-lg text-gray-300 font-semibold'>
                {i + 1}. {point?.title}:
              </h2>
              <p className='text-gray-400 pl-6 mt-2'>{point?.description}</p>
            </ol>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetail;
