import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useContext,
} from "react";
import { sizes } from "../constants/index";
import { productsInCartType, userType } from "../types";
import { SocketContext } from "../App";
import axioisPrivate from "../api";
import OrderSummary from "./OrderSummary";

const ShowProductsInCart = ({
  productsInCart,
  setProductsInCart,
  user,
  totalPrice,
  setTotalPrice,
  deposit,
  setDeposit,
}: {
  productsInCart: productsInCartType[];
  setProductsInCart: Dispatch<SetStateAction<productsInCartType[]>>;
  user: userType;
  totalPrice: number;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  deposit: number;
  setDeposit: Dispatch<SetStateAction<number>>;
}) => {
  const socket = useContext(SocketContext);

  const [productsSelected, setProductsSelected] = useState<
    Record<string, boolean>
  >({});

  const [checkedAll, setCheckedAll] = useState(
    productsInCart.length > 0 ? true : false
  );

  // UPDATE PRODUCTS SELECTED
  useEffect(() => {
    let productSelected: Record<string, boolean> = {};
    for (let i = 0; i < productsInCart.length; i++) {
      productSelected[productsInCart[i].name] = checkedAll;
    }

    setProductsSelected(productSelected);
  }, [checkedAll]);

  // DELETE PRODUCT IN CART
  useEffect(() => {
    socket?.on("deleteProductInCart", (productInCartId: number) => {
      setProductsInCart((productInCart) =>
        productInCart.filter((product) => product.id != productInCartId)
      );
    });
  }, [socket?.io]);

  // UPDATE TOTAL PRICE AND DEPOSIT WHEN PRODUCTS SELECTED CHANGED
  useEffect(() => {
    let totalPrice = 0;
    let currentDeposit = 0;
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsSelected[productsInCart[i].name] == true) {
        totalPrice =
          totalPrice +
          (productsInCart[i].status == "Mua"
            ? productsInCart[i].priceSale
            : productsInCart[i].priceRent) *
            productsInCart[i].quantity;
        currentDeposit =
          currentDeposit +
          (productsInCart[i].status == "Thuê"
            ? (productsInCart[i].priceRent * productsInCart[i].quantity * 35) /
              100
            : 0);
      }
    }
    setDeposit(currentDeposit);
    setTotalPrice(totalPrice);
  }, [productsInCart, productsSelected]);

  const handlePrice = (total: Number) => {
    let res = String(total);
    let newRes = "";
    const len = res.length;
    for (let i = 0; i < len; i++) {
      newRes += res[i] + ((len - i - 1) % 3 == 0 ? "." : "");
    }
    return newRes.slice(0, newRes.length - 1);
  };

  const handleUpdateProductInCart = (
    productUpdated: productsInCartType,
    column: string,
    newValue: string | number
  ) => {
    axioisPrivate.put(`/cart/update`, {
      userId: user.id,
      cartId: productUpdated.id,
      column,
      newValue,
    })
    .then(( ) => {
      setProductsInCart((productsInCart) =>
        productsInCart.map((product) =>
          product.id === productUpdated.id
            ? { ...product, [column]: newValue }
            : product
        )
      );
    });
  };

  // fetch productsInCart from server
  useEffect(() => {
    let isMounted = true;
    axioisPrivate.get(`/cart/${user.id}`).then((response) => {
      isMounted && setProductsInCart(response.data);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleDeleteProductInCart = (productDeletedId: number) => {
    axioisPrivate.delete(`/cart/delete/${productDeletedId}`, {
      data: { userId: user.id },
    });
  };

  const handleProductsSelected = (e: any) => {
    const { name, checked } = e.target;
    setProductsSelected({
      ...productsSelected,
      [name]: checked,
    });
  };

  return (
    <div className="flex flex-col gap-4 p-[16px] w-[40%]">
      <h1 className="text-[30px] font-bold font-serif">Giỏ hàng</h1>

      {/* HEADER */}
      <div className="flex flex-row justify-between text-[#00000066] text-[12px] ">
        <div className="flex flex-row gap-2 justify-center items-center">
          <input
            checked={checkedAll}
            name="checkedAll"
            onChange={() => {
              setCheckedAll(!checkedAll);
            }}
            type="checkbox"
            className="w-[20px] h-[20px]"
          />
          <div>TẤT CẢ SẢN PHẨM</div>
        </div>
        <div className="flex flex-row gap-8">
          <div>SỐ LƯỢNG</div>
          <div>GIÁ</div>
        </div>
      </div>

      {/* BODY */}
      <div className="flex flex-col gap-4">
        {productsInCart.length > 0 &&
          productsInCart.map((product, index) => (
            <div
              key={index}
              className="pt-[20px] border-t-[1px] border-[#ccc] 
             flex flex-row  items-center gap-4"
            >
              <div className="flex flex-row justify-center items-center gap-3">
                <input
                  name={product.name}
                  className="w-[20px] h-[20px]"
                  type="checkbox"
                  checked={
                    productsSelected[product.name]
                      ? productsSelected[product.name]
                      : false
                  }
                  onChange={(e) => {
                    handleProductsSelected(e);
                  }}
                />

                <div className="w-[90px] h-[140px]">
                  <img
                    src={`${product.image}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center gap-4 relative">
                <h1 className="font-medium leading-5">{product.name}</h1>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row items-center gap-7 ">
                    {/* STATUS */}
                    <div
                      className="bg-[#f1f1f1] rounded-2xl 
                  font-medium py-[6px]  min-w-[80px] text-title flex items-center justify-center"
                    >
                      {product.status}
                    </div>
                    {/* STATUS */}

                    {/* QUANTITY */}
                    <div
                      className="flex flex-row gap-3 justify-center items-center border-black 
                border-[1px] w-[90px] px-[4px] py-[4px] rounded-[20px]"
                    >
                      <i
                        className="fa-solid fa-minus hover:cursor-pointer "
                        onClick={() => {
                          handleUpdateProductInCart(
                            product,
                            "quantity",
                            product.quantity - 1
                          );
                        }}
                      ></i>
                      <h1 className="text-[18px] font-medium">
                        {product.quantity}
                      </h1>
                      <i
                        className="fa-solid fa-plus hover:cursor-pointer"
                        onClick={() => {
                          handleUpdateProductInCart(
                            product,
                            "quantity",
                            product.quantity + 1
                          );
                        }}
                      ></i>
                    </div>
                    {/* QUANTITY */}

                    {/* PRICE */}
                    <div className="font-bold w-full flex justify-end">
                      {handlePrice(
                        product.status === "Mua"
                          ? product.priceSale
                          : product.priceRent
                      )}
                      đ
                    </div>
                    {/* PRICE */}
                  </div>

                  {/* SHOW DATE START AND DATE END */}
                  {product.status === "Thuê" && (
                    <div className="flex flex-row justify-between items-center gap-y-4">
                      <div className="flex flex-col gap-1 text-[12px] black w-[160px]">
                        <p className="font-normal">
                          Ngày nhận hàng:{" "}
                          <span className="text-black font-bold">
                            {String(product.startDate).split("T")[0]}
                          </span>
                        </p>
                        <p className="font-normal">
                          Ngày trả hàng:{" "}
                          <span className="text-black font-bold">
                            {String(product.endDate).split("T")[0]}
                          </span>
                        </p>
                      </div>
                      <div className="font-bold flex flex-col items-end">
                        {handlePrice(
                          (product.priceRent * product.quantity * 35) / 100
                        )}
                        đ
                        <span className="font-normal w-[100px] flex flex-row text-end flex-wrap leading-4 text-[12px]">
                          {`(Tiền cọc 35% của giá thuê )`}{" "}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* SIZE */}
                  <select
                    value={product.size}
                    onChange={(e) => {
                      handleUpdateProductInCart(
                        product,
                        "size",
                        e.target.value
                      );
                    }}
                    className="bg-[#f1f1f1] rounded-2xl 
                  font-medium py-[6px] px-[20px] w-[100px] text-title flex flex-row items-center justify-center"
                  >
                    {sizes.map((size) => (
                      <option key={size.size} className="font-medium">
                        {size.size}
                      </option>
                    ))}
                    {product.size}
                  </select>

                  <div
                    className="row_center w-full gap-1 flex flex-row justify-between 
                  hover:cursor-pointer opacity-85"
                  >
                    <div
                      onClick={() => {
                        handleDeleteProductInCart(product.id);
                      }}
                    >
                      <i className="fa-solid fa-trash-can mr-[10px]"></i>
                      <span>Xóa </span>
                    </div>

                    <div className="text-[#2f5acf] font-bold">
                      Tổng cộng:{" "}
                      {handlePrice(
                        (product.status === "Mua"
                          ? product.priceSale
                          : product.priceRent) *
                          product.quantity +
                          (product.status === "Thuê"
                            ? (product.priceRent * product.quantity * 35) / 100
                            : 0)
                      )}
                      đ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <OrderSummary
          totalPrice={totalPrice}
          deposit={deposit}
          handlePrice={handlePrice}
        />
      </div>
    </div>
  );
};

export default ShowProductsInCart;
