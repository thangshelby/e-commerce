import { useState } from "react";
// import { products } from "../constants";
import { useNavigate } from "react-router-dom";

import ShowProductList from "./ShowProductList";
const Popular = () => {
  const [currentCagory, setCurrentCagory] = useState<"new" | "popular">("new");
  const navigate = useNavigate();

  const ButtonLeft = () => (
    <svg
      color="#dce0df"
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.332583 10.153L7.84713 17.6677C8.06163 17.8823 8.34753 18 8.65238 18C8.95756 18 9.24329 17.8821 9.4578 17.6677L10.1401 16.9853C10.3544 16.7711 10.4725 16.4851 10.4725 16.1801C10.4725 15.8752 10.3544 15.5795 10.1401 15.3653L5.75618 10.9718L19.684 10.9718C20.3119 10.9718 20.8081 10.4802 20.8081 9.85208L20.8081 8.88731C20.8081 8.25918 20.3119 7.718 19.684 7.718L5.70645 7.718L10.1399 3.29995C10.3542 3.08544 10.4723 2.80716 10.4723 2.50214C10.4723 2.19747 10.3542 1.91512 10.1399 1.70078L9.45763 1.02055C9.24312 0.806043 8.95739 0.689147 8.65221 0.689147C8.34736 0.689147 8.06147 0.807565 7.84696 1.02207L0.332414 8.53662C0.117398 8.7518 -0.000849648 9.03905 -4.72765e-06 9.3444C-0.000681872 9.65077 0.117398 9.93819 0.332583 10.153Z"
        fill="currentColor"
      ></path>
    </svg>
  );

  const ButtonRight = () => {
    return (
      <svg
        width="21"
        color="#dce0df"
        height="18"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.4755 7.84696L12.961 0.33225C12.7465 0.117742 12.4606 0 12.1557 0C11.8505 0 11.5648 0.117912 11.3503 0.33225L10.668 1.01468C10.4537 1.22885 10.3356 1.51492 10.3356 1.81993C10.3356 2.12478 10.4537 2.42049 10.668 2.63466L15.0519 7.02818H1.12414C0.496176 7.02818 0 7.51979 0 8.14792V9.11269C0 9.74082 0.496176 10.282 1.12414 10.282H15.1017L10.6682 14.7C10.4539 14.9146 10.3358 15.1928 10.3358 15.4979C10.3358 15.8025 10.4539 16.0849 10.6682 16.2992L11.3505 16.9794C11.565 17.194 11.8507 17.3109 12.1559 17.3109C12.4607 17.3109 12.7466 17.1924 12.9611 16.9779L20.4757 9.46338C20.6907 9.2482 20.809 8.96095 20.8081 8.6556C20.8088 8.34923 20.6907 8.06181 20.4755 7.84696Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  };

  return (
    <div className="flex flex-col px-[1rem] justify-center items-center  h-full">
      <div className="w-full my-[100px] ">
        <div className="flex flex-col items-center gap-5">
          {/* BUTTON SWITCH CATEGORY */}
          <div className="flex flex-row gap-5 w-full">
            <div
              onClick={() => {
                setCurrentCagory("new");
              }}
              className={`text-[18px] hover:cursor-pointer px-[24px] py-[8px] rounded-[15px] ${
                currentCagory == "new"
                  ? "text-white bg-black font-medium"
                  : "bg-white text-black border-[1px] border-black"
              }`}
            >
              Sản phẩm mới
            </div>
            <div
              onClick={() => {
                setCurrentCagory("popular");
              }}
              className={`text-[18px] hover:cursor-pointer px-[24px] py-[8px] rounded-[15px] ${
                currentCagory == "popular"
                  ? "text-white bg-black font-medium"
                  : "bg-white text-black border-[1px] border-black"
              }`}
            >
              Sản phẩm bán chạy
            </div>
          </div>
          {/* BUTTON SWITCH CATEGORY */}

          {/* LIST PRODUCTSList */}
          <div className="w-full relative">
            <div className="absolute  bg-black hover:cursor-pointer  rounded-[50%] p-[10px] left-0 top-1/2 transform -translate-y-1/2 z-10">
              <ButtonLeft />
            </div>
            <ShowProductList currentCagory={currentCagory} />

            <div className="absolute  bg-black  hover:cursor-pointer rounded-[50%] p-[10px] right-0 top-1/2 transform -translate-y-1/2">
              <ButtonRight />
            </div>
          </div>
          {/* LIST PRODUCTS */}

          <div
            onClick={() => {
              navigate("/collection/all");
              window.scrollTo(0, 0);
            }}
            className="px-[26px] py-[10px] bg-black font-medium text-white rounded-[10px] hover"
          >
            Khám phá tất cả sản phẩm
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
