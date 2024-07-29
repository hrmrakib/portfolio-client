import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import date from "date-and-time";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProject = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const now = new Date();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, tags, shortDescription, liveLink, githubLink } = data;
    console.log(data);

    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };

    console.log(imageFile);

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const projectDetail = {
        name,
        tags,
        shortDescription,
        liveLink,
        githubLink,
        publishDate: date.format(now, "YYYY/MM/DD HH:mm:ss"),
        image: res.data?.data?.display_url,
      };

      const getRes = await axiosSecure.post("/add-project", projectDetail);

      console.log(getRes.data);

      if (getRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added successfully!`,
          showConfirmButton: false,
          timer: 1999,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div className='max-w-20xl mt-5 mx-auto p-2 md:p-6 bg-white border rounded-lg shadow-md'>
      <h2 className='text-2xl text-center font-bold mb-4 border-b pb-6'>
        Add Project
      </h2>
      <form
        className='w-full grid lg:grid-cols-2 items-center gap-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor='image' className='block text-gray-700'>
            Image
          </label>
          <input
            type='file'
            {...register("image", { required: true })}
            className='mt-2'
          />
          {errors.image && (
            <span className='text-red-600 font-medium'>Image is required</span>
          )}
        </div>
        <div>
          <label htmlFor='name' className='block text-gray-700'>
            Name
          </label>
          <input
            name='name'
            type='text'
            {...register("name", { required: true })}
            className='mt-2 p-2 w-full border rounded'
          />
          {errors.name && (
            <span className='text-red-600 font-medium'>Name is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor='tags'
            className='block text-gray-700 dark:text-gray-100'
          >
            Tag
          </label>
          <select
            {...register("tags", { required: true })}
            className='p-2 border border-gray-300 rounded'
          >
            <option value=''>All Tags</option>
            <option value=''>html-css-js</option>
            <option value='React'>React</option>
            <option value='Nextjs'>Nextjs</option>
            <option value='MERN'>MERN</option>
          </select>
          <br />
          {errors.tags && (
            <span className='text-red-600 font-medium'>
              Project tag is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor='shortDescription' className='block text-gray-700'>
            Short Description
          </label>
          <input
            name='shortDescription'
            type='text'
            {...register("shortDescription", { required: true })}
            className='mt-2 p-2 w-full border rounded'
          />
          {errors.shortDescription && (
            <span className='text-red-600 font-medium'>
              shortDescription is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor='liveLink' className='block text-gray-700'>
            Live Link
          </label>
          <input
            name='liveLink'
            type='text'
            {...register("liveLink", { required: true })}
            className='mt-2 p-2 w-full border rounded'
          />
          {errors.liveLink && (
            <span className='text-red-600 font-medium'>
              liveLink is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor='githubLink' className='block text-gray-700'>
            Github Link
          </label>
          <input
            name='githubLink'
            type='text'
            {...register("githubLink", { required: true })}
            className='mt-2 p-2 w-full border rounded'
          />
          {errors.githubLink && (
            <span className='text-red-600 font-medium'>
              githubLink is required
            </span>
          )}
        </div>

        <div className='lg:col-span-2'>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200'
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
