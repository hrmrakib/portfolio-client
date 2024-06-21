import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Blog = () => {
  const axiosPublic = useAxiosPublic();

  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      return res.data;
    },
  });

  return (
    <>
      <section id='blog' className='mb-24 bg-[#09101A] px-8 py-10 rounded-lg'>
        <div className='text-center'>
          <h3 className='color-primary text-2xl mb-3'>My Blog</h3>
          <h2 className='text-3xl lg:text-5xl text-center text-white font-bold leading-snug max-w-[790px] mx-auto'>
            Rafting Unique Experiences Inspiring Connections
          </h2>
        </div>

        {/* <!-- blog lists --> */}
        <div className='my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
          {blogs?.map((blog) => (
            <Link to={`/blogDetail/${blog._id}`}>
              <div className='blog'>
                <div className='relative mb-3'>
                  <img
                    className='rounded w-full h-56'
                    src={blog?.image}
                    alt=''
                  />
                </div>
                <p>
                  <i className='fa-solid fa-circle-user text-green-600 mr-1'></i>{" "}
                  By Admin
                </p>
                <h2 className='text-xl text-gray-200 my-2'>
                  {blog?.headingTitle}
                </h2>
                <p>{blog?.summery.split(" ").slice(0, 13).join(" ")} [...]</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
