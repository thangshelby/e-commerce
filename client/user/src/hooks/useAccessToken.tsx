import { useSelector } from "react-redux";
import { userSelector,accessTokenSelector } from "../store/selector";

const useAccessToken = () => {
  const accessToken = useSelector(accessTokenSelector);
  return accessToken;
};

export default useAccessToken;
