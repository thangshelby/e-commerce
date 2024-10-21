import React, {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
} from "react";

import { userType,userInit } from "../types";


export const AuthContext = createContext<{
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  user: userType;
  setUser: Dispatch<SetStateAction<userType>>;
}>({accessToken:'',setAccessToken:()=>{},user:userInit,setUser:()=>{}}  );

const AuthProvider = ({ children }:{children:React.ReactNode}) => {
  const [accessToken, setAccessToken] = useState("");

  const [user,setUser]= useState(userInit);
  return (
    <AuthContext.Provider value={{ accessToken,setAccessToken,user,setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
