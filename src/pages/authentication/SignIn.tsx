import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState("");

  return (
    <div className="flex flex-col py-[48px] px-[160px] gap-3 w-[95%]">
      <div className="text-[30px] text-black font-medium">
        Chào mừng bạn đến với SẮC LỤA VIỆT
      </div>

      <div className="text-[14px] text-black font-medium">
        Quyền lợi dành riêng cho bạn khi tham gia với chúng tôi
      </div>
      <div className="flex flex-row gap-6">
        <div className="w-[290px] h-[113px]">
          <img src="https://mcdn.coolmate.me/image/March2024/mceclip3_52.jpg" />
        </div>
        <div className="w-[290px] h-[113px]">
          <img src="https://mcdn.coolmate.me/image/March2024/mceclip1_36.jpg" />
        </div>
        <div className="w-[290px] h-[113px]">
          <img src="https://mcdn.coolmate.me/image/March2024/mceclip2_55.jpg" />
        </div>
      </div>

      <div className="text-[14px] text-black font-bold">
        Đăng nhập hoặc đăng ký (miễn phí)
      </div>

      <div className="flex flex-row gap-3">
        <div className="w-[50px] h-[50px] rounded-md border-[1px] border-[#ccc] p-[10px]">
          <img src="https://mcdn.coolmate.me/image/September2023/mceclip1_21.png" />
        </div>

        <div className="w-[50px] h-[50px] rounded-md border-[1px] border-[#ccc] p-[10px] row_center">
          <img
            src="https://mcdn.coolmate.me/image/September2023/mceclip0_86.png"
            className="w-[17px] h-[30px]"
          />
        </div>
      </div>

      <div className="row_center text-black font-normal gap-1">
        <div className="h-[1px] w-[8%] bg-[#ebebeb] "></div>
        Hoặc
        <div className="h-[1px] w-full bg-[#ebebeb] "></div>
      </div>

      <div className="flex flex-col  w-[100%] text-[#000000B3]">
        <input
          type="text"
          value={account}
          onChange={(e) => {
            setAccount(e.target.value);
          }}
          placeholder="Email hoặc số điện thoại"
          className="w-full px-[16px] py-[10px] rounded-2xl border 
                  border-[#f1f1f1] focus:outline-none focus:text-black  focus:font-medium focus:border-blue-700"
        />
      </div>

      <div className="relative  w-[100%] text-[#000000B3]">
        <input
          type={`${showPassword ? "text" : "password"}`}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Mật khẩu"
          className="w-full px-[16px] py-[10px] rounded-2xl border 
                  border-[#f1f1f1] focus:outline-none focus:text-black focus:font-medium  focus:border-blue-700"
        />
        {password && (
          <i
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="hover:cursor-pointer top-[35%] absolute hover:opacity-50   right-[20px] fa-regular fa-eye "
          ></i>
        )}
      </div>
      <div
        className="bg-black py-[10px] row_center text-white text-[16px] rounded-2xl border 
                  border-[#f1f1f1] hover:cursor-pointer hover:bg-[#f1f1f1] hover:text-black transition-transform"
      >
        Đăng Nhập
      </div>

      <div className="flex flex-row justify-between">
        <p
          onClick={() => {
            navigate("auth/signup");
          }}
          className="text-[14px] text-[#2f5acf] font-medium hover:cursor-pointer hover:text-black"
        >
          Đăng ký tài khoản mới
        </p>
        <p className="text-[14px] text-[#2f5acf] font-medium hover:cursor-pointer hover:text-black">
          Quên mật khẩu
        </p>
      </div>
    </div>
  );
};

export default SignIn;
