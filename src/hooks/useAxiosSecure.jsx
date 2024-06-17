import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://portfolio-server-two-delta.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
