import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productsInCartType, categoryType } from "../types/index.tsx";
import { SocketContext } from "../App.tsx";
import useAxiosPrivate from "../hooks/useAxiosPrivate.tsx";
import useAuthContext from "../hooks/useAuthContext.tsx";
const Navbar = () => {
  const navigate = useNavigate();
  const { accessToken, user } = useAuthContext();

  const socket = useContext(SocketContext);
  const axiosPrivate = useAxiosPrivate();

  // const [linkIsHover, setLinkIsHover] = useState("");
  const [categories, setCategories] = useState<categoryType[]>([]);
  const [productsInCart, setProductInCart] = useState<productsInCartType[]>([]);

  useEffect(() => {
    if (accessToken) {
      axiosPrivate
        .get(`/category`)
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.log(error);
          navigate("/auth/signin");
        });

      axiosPrivate
        .get(`/cart/${user.id}`)
        .then((response) => {
          setProductInCart(response.data);
        })
        .catch((error) => {
          console.log(error);
          navigate("/auth/signin");
        });
    }
  }, [accessToken]);

  useEffect(() => {
    socket?.on("newProductInCart", (newProduct: productsInCartType) => {
      setProductInCart((productInCart) => [...productInCart, newProduct]);
    });
    socket?.on("deleteProductInCart", (productInCartId: number) => {
      setProductInCart((productInCart) =>
        productInCart.filter((product) => product.id != productInCartId)
      );
    });
  }, [socket?.io]);

  const handleDeleteProductInCart = (productDeletedId: number) => {
    axiosPrivate.delete(`/cart/delete/${productDeletedId}`, {
      data: { userId: user.id },
    });
  };

  const ShowCategory = () => {
    return (
      <div
        className="category md:flex hidden md:flex-row flex-col  gap-10
md:justify-center justify-start items-start ml-[20px] shadow-2xl "
      >
        {categories.length > 0 &&
          categories.map((category) => (
            <div
              onClick={() => {
                navigate("/collection/" + category.NAME);
              }}
              className="text-white text-[10px] 
font-bold hover:cursor-pointer"
              key={category.NAME}
            >
              <p className="hover:text-gray-500">{category.NAME}</p>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="fixed top-0 left-0  w-full h-[70px] bg-[#212121] z-10">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row justify-center items-center hover:cursor-pointer">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="h-[70px] w-[70px]"
          >
            <img className="w-full h-full" src="../../assets/images/logo.png" />
          </div>

          <div>
            <i className="md:hidden relative block fa-solid fa-list fa-lg ml-[0.5rem] text-[#f9f9f9] navbar__category__icon">
              <ShowCategory />
            </i>
            <ShowCategory />

          </div>
        </div>

        <div
          className="flex flex-row items-center justify-center 
         gap-3  h-[70px] mr-[50px]  relative"
        >
          {/* AUTHENTICATION */}

          {user.id ? (
            <div className="text-[18px] w-[30px] h-[30px] hover:cursor-pointer flex justify-center items-center rounded-[50%] bg-[#78909c] font-normal text-white">
              {user?.firstname[0]}
            </div>
          ) : (
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
          )}

          {/* AUTHENTICATION */}

          {/* CART  */}
          <div
            onClick={() => {
              navigate("/Cart");
            }}
            className="relative cart_list hover:cursor-pointer"
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
              <div className="flex flex-col gap-3 overflow-y-scroll max-h-[360px]">
                {productsInCart.length > 0 &&
                  productsInCart.map((productInCart) => (
                    <div key={productInCart.id} className="row_center gap-2 ">
                      <img
                        src={`${"../" + productInCart.image}`}
                        className="w-[70px] h-[110px] object-cover rounded-xl shadow-2xl  "
                      />
                      <div className="flex flex-col gap-4 w-full">
                        <div className="flex flex-row gap-3 justify-between items-center">
                          <h1 className="font-semibold leading-5 text-[13px]">
                            {productInCart.name.toUpperCase()}
                          </h1>
                          <i
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteProductInCart(productInCart.id);
                            }}
                            className="fa-solid fa-x fa-xs mr-2 px-[5px] py-[9px]  rounded-[50%] hover:bg-gray-400 hover:cursor-pointer"
                          ></i>
                        </div>

                        <div>
                          <p>size {productInCart.size}</p>
                          <p>
                            {" "}
                            {productInCart.status == "Mua"
                              ? productInCart.priceSale
                              : productInCart.priceRent}
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
