import { useEffect } from "react";
import axiosPrivate from "../api/index";
import useAuthContext from "./useAuthContext";
import useRefreshToken from "./useRefreshToken";
import { useNavigate } from "react-router-dom";

const useAxiosPrivate = () => {
  const { accessToken } = useAuthContext();
  const refresh = useRefreshToken();
  const navigate = useNavigate();
  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      function (config) {
        if (!config.headers.accessToken) {
          config.headers.accessToken = accessToken;
        }
        return config;
      },
      function (error) {
        console.log("request error");
        return Promise.reject(error);
      }
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {


        if (error?.response?.status === 403 && !error.config.sent) {
          error.config.sent = true;
          const newAccessToken = await refresh();
          error.config.headers.accessToken = newAccessToken;
          return axiosPrivate(error.config);
        }
        else{
          // alert("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại");
          // navigate("/auth/signin");
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
