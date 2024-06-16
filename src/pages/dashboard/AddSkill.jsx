import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddSkill = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const userEmail = user?.email;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    return;
    // image upload to imgbb and then get an url
    const imageFile = { image: data.petPhoto[0] };

    console.log(imageFile);

    // const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });

    // if (res.data.success) {
    //   const petDetail = {
    //     name,
    //     age,
    //     userEmail,
    //     category,
    //     location,
    //     shortDescription,
    //     longDescription,
    //     image: res.data.data.display_url,
    //   };

    //   const menuRes = await axiosSecure.post("/pets", petDetail);

    //   console.log(menuRes.data);

    //   if (menuRes.data.insertedId) {
    //     // show success popup
    //     reset();
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: `${data.name} is added successfully!`,
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   }
    // }
    // console.log("with image url", res.data);
  };

  return (
    <div className='max-w-20xl mt-5 mx-auto p-2 md:p-6 bg-white border rounded-lg shadow-md'>
      <h2 className='text-2xl text-center font-bold mb-4 border-b pb-6'>
        Add a Pet
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

        <div className='mt-5'>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200'
          >
            Add Pet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSkill;
