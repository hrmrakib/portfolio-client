import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";

const useSocialSign = () => {
  const axiosPublic = useAxiosPublic();
  const { googleSignIn, githubSignIn, facebookSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleIn = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };

      axiosPublic.post("/user", userInfo).then((res) => {
        console.log(res.data);
      });
      navigate("/");
    });
  };
  const handleGithubIn = () => {
    githubSignIn().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };

      axiosPublic.post("/user", userInfo).then((res) => {
        console.log(res.data);
      });
      navigate("/");
    });
  };
  const handleFacebookIn = () => {
    facebookSignIn().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };

      axiosPublic.post("/user", userInfo).then((res) => {
        console.log(res.data);
      });
      navigate("/");
    });
  };

  return { handleGoogleIn, handleGithubIn, handleFacebookIn };
};

export default useSocialSign;
