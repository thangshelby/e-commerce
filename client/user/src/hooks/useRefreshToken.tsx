import useAuthContext from "./useAuthContext";
import axioisPrivate from "../api";
import { userInit } from "../types";

const useRefreshToken = () => {
  const { user, setAccessToken, setUser } = useAuthContext();
  const refresh = async () => {
    const response = await axioisPrivate.get(
      `/auth/user/refresh-token/${user.email}`
    );

    return response.data.message;
  };

  return refresh;
};

export default useRefreshToken;
