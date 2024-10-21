import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpFormField } from "../constants";
// import { signUp } from "../api/user";

const SignUp = () => {
  window.scrollTo(0, 0);
  const [signInForm, setSignInForm] = useState<{
    [key: string]: string;
  }>({
    firstname: "",
    lastname: "",
    email: "",
    phone:'',
    password: "",
    confirmPassword: "",
    gender: "",
    birth:''
  })
  const navigate = useNavigate();

  const handleSignUp =() => {
    // signUp(signInForm)
  }


  return (
    <div className="flex flex-col py-[48px] px-[160px] gap-3  justify-center items-start">
   

      <div className="text-[14px] text-black font-bold">
        Đăng nhập hoặc đăng ký (miễn phí)
      </div>

      <form className="grid grid-cols-2 gap-4 w-full">
        {signUpFormField.map((field) => (
          <div key={field.name} className="flex flex-col gap-2  text-[#000000B3] ">
            <label className="font-bold">{field.label}</label>
            {field.options ? (
              <div className="flex flex-row justify-between">
                {field.options.map((option) => (
                  <div key={option} className="mt-3 w-[32%] flex flex-row items-center justify-start gap-2">
                    <input
                      type={field.type}
                      value={option}
                      checked={signInForm[field.name] === option}
                      onChange={(e) => {
                        
                        setSignInForm({
                          ...signInForm,
                          [field.name]: e.target.value,
                        });
                      }}
                      placeholder={`Enter your ${option}`}
                      className=" px-[16px] py-[10px] rounded-2xl border 
                      border-[#f1f1f1] focus:outline-none focus:text-black  focus:font-medium focus:border-blue-700"
                      />
                      <label>{option}</label>
                  </div>
                ))}
              </div>
            ) : (
              <input
                type={field.type}
                value={signInForm[field.name]}
                onChange={(e) => {
                  setSignInForm({
                    ...signInForm,
                    [field.name]: e.target.value,
                  });

                
                }}
                placeholder={`Enter your ${field.name}`}
                className="w-full px-[16px] py-[10px] rounded-2xl border 
                border-[#f1f1f1] focus:outline-none focus:text-black  focus:font-medium focus:border-blue-700"
              />
            )}
          </div>
        ))}
      </form>

      <div
        onClick={() => {
          handleSignUp()
          // navigate("/");
        }}
        className="bg-black py-[10px] row_center w-full text-white text-[16px] rounded-2xl border 
                  border-[#f1f1f1] hover:cursor-pointer hover:bg-[#f1f1f1] hover:text-black transition-transform"
      >
        Đăng Kí
      </div>

      <div className="flex flex-row justify-between">
        <p
          onClick={() => {
            navigate("/auth/signin");
          }}
          className="text-[14px] text-[#2f5acf] font-medium hover:cursor-pointer hover:text-black"
        >
          Đã có tài khoản
        </p>
        {/* <p className="text-[14px] text-[#2f5acf] font-medium hover:cursor-pointer hover:text-black">
          Quên mật khẩu
        </p> */}
      </div>
    </div>
  );
};

export default SignUp;
