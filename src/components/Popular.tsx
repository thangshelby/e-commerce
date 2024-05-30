import { useState } from "react";
import { products } from "../constants";
import { useNavigate } from "react-router-dom";

import ShowProductList from "./ShowProductList";
const Popular = () => {
  const [currentCagory, setCurrentCagory] = useState<"new" | "popular">("new");
  const navigate= useNavigate()
  let productsList = products;
  if (currentCagory == "new") {
    productsList = products.slice(0, 5);
  } else {
    productsList = products.slice(5, 10);
  }

  console.log(productsList)

  return (
    <div className="flex flex-col justify-center items-center w-[1200px] h-full">
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

        <ShowProductList currentCagory={currentCagory} />
        {/* LIST PRODUCTS */}


          
        <div 
        onClick={()=>{
          navigate('/collection/all')
          window.scrollTo(0,0)
        }}
        className="px-[26px] py-[10px] bg-black font-medium text-white rounded-[10px] hover">
          Khám phá tất cả sản phẩm
        </div>


      </div>
    </div>
    </div>
  );
};

export default Popular;
