import { navbarLinks } from "../constants/index.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useProductSelector } from "../store/selector.tsx";
import { productsInCart } from "../types/index.tsx";

const Navbar = () => {
  const [linkIsHover, setLinkIsHover] = useState("");
  const navigate = useNavigate();

  const productsInCart: [productsInCart] = useSelector(useProductSelector);

  return (
    <div className="fixed top-0 left-0  w-full h-[70px] bg-[#212121] z-10">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row hover:cursor-pointer">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="h-[70px] w-[70px]"
          >
            <img
              className="w-full h-full"
              src="../public/assets/images/logo.png"
            />
          </div>
          <div
            className="flex flex-row gap-10
          justify-center items-center ml-[20px]"
          >
            {navbarLinks.map((link) => (
              <div
                onMouseEnter={() => setLinkIsHover(link.title)}
                onMouseLeave={() => setLinkIsHover("")}
                className="text-white text-[10px]  gap-2 relative
              font-bold hover:cursor-pointer"
                key={link.title}
              >
                <p className="hover:text-gray-500">{link.title}</p>
                {link.children && (
                  <div>
                    <div
                      className={`absolute top-[100%] left-[50%] w-[6px] h-[6px] border-t-[1px] 
                  border-r-[1px] border-white  ${
                    linkIsHover == link.title
                      ? "rotate-[135deg]"
                      : "rotate-[135deg]"
                  }`}
                    />
                    {linkIsHover == link.title && (
                      <div
                        className="bg-[#333333] absolute top-[42px] text-[8px] flex flex-col gap-3 
                      p-[12px] w-[100px] navbar_link_exit"
                      >
                        <div
                          className="absolute top-[-42px] w-[40px] 
                         h-[42px] "
                        ></div>
                        {link.children.map((child) => (
                          <div key={child.title} className="hover:opacity-70">
                            {child.title}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-row items-center justify-center 
         gap-3  h-[70px] mr-[50px]  "
        >
          {/* AUTHENTICATION */}
          <div
            onClick={() => {
              navigate("/auth/signin");
            }}
          >
            <img
              className="hover:cursor-pointer hover:opacity-80"
              src="https://www.coolmate.me/images/header/icon-account-white-new.svg"
            />
          </div>

          {/* AUTHENTICATION */}

          {/* CART  */}
          <div
            onClick={() => {
              navigate("/Cart");
            }}
            className="relative cart_list"
          >
            <img
              className={` hover:cursor-pointer hover:opacity-80`}
              src="https://www.coolmate.me/images/header/icon-cart-white-new.svg?v=1"
            />

            <div>
              {productsInCart.length > 0 && (
                <div
                  className="absolute top-4 left-3 flex justify-center items-center w-[16px] h-[16px] font-bold 
              bg-yellow-300 rounded-[50%] text-[10px]"
                >
                  {productsInCart.length}
                </div>
              )}
            </div>

            <div
              className="absolute top-14 bg-white left-[-340px]  w-[400px] 
             shadow-2xl rounded-2xl  overflow-y-hidden child flex flex-col gap-2 p-[16px]"
            >
              <div className="absolute top-0 left-0 bg-yellow-100  h-[200px]"></div>
              <div className="flex flex-row justify-between items-center">
                <h1>{productsInCart.length} sản phẩm</h1>
                <h1
                  onClick={() => {
                    navigate("/Cart");
                  }}
                  className="text-blue-600 hover:cursor-pointer"
                >
                  Xem tất cả
                </h1>
              </div>
              <div className="flex flex-col gap-3">
                {productsInCart.map((newProduct) => (
                  <div
                    key={newProduct.productInfo.titile}
                    className="row_center gap-2 "
                  >
                    <img
                      src={`../public/assets/images/${newProduct.productInfo.path}.jpg`}
                      className="w-[70px] h-[110px] object-cover rounded-xl shadow-2xl  "
                    />
                    <div className="flex flex-col gap-4 w-full">
                      <h1 className="font-semibold leading-5 text-[13px]">
                        {newProduct.productInfo.titile}
                      </h1>
                      <div>
                        <p>size {newProduct.productMore.size}</p>
                        <p>
                          {" "}
                          {newProduct.productMore.status != "Thuê"
                            ? newProduct.productInfo.priceSell
                            : newProduct.productInfo.priceRent}
                          đ
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
