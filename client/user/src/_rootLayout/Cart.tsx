import { paymentMethods } from "../constants";
import { useState, useEffect } from "react";
import {
  DeliveryInfo,
  PaymentMethod,
  CreateOrder,
  ShowProductsInCart,
} from "../components";
import { productsInCartType, deliveryInfoType } from "../types";
import useAuthContext from "../hooks/useAuthContext";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Cart = () => {
  const axioisPrivate = useAxiosPrivate();
  const { user } = useAuthContext();

  const [productsInCart, setProductsInCart] = useState<productsInCartType[]>(
    []
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [deposit, setDeposit] = useState<number>(0);
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState(
    paymentMethods[0]
  );
  const [deliveryInfo, setDeliveryInfo] = useState(deliveryInfoIinitial);

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

  const handleCreateOrder = () => {
    console.log(deliveryInfo, currentPaymentMethod, productsInCart);
    axioisPrivate.post("/order/create-order", {
      deliveryInfo,
      paymentMethod:currentPaymentMethod,
      productsInCart,
      user,
      totalPrice: totalPrice + deposit,
    });
  };

  return (
    <div className="relative flex flex-row p-[16px] text-title ư-full ">
      {/* TOTAL */}
      <CreateOrder
        total={totalPrice}
        currentPaymentMethod={currentPaymentMethod}
        handleCreateOrder={handleCreateOrder}
      />

      {/* TOTAL */}

      <div className="flex flex-col w-[60%] ">
        {/* BANNER */}
        <div className="bg-[#f1f1f1] w-full p-[16px] gap-4 rounded-2xl row_center">
          <div className="min-w-[216px] font-medium leading-5 px-[24px] py-[15px]  row_center bg-blue-700 text-white rounded-3xl">
            Tham gia với chúng tôi
          </div>
          <div>
            <div className="text-black text-[15px] flex flex-row leading-5 font-[400] flex-wrap gap-1">
              Tham gia vào cộng đồng chúng tôi để nhận
              <span className="font-bold flex flex-row"> voucher-15%</span>
              <span>cho đơn </span>hàng đầu tiên và ghi nhận hoàn tiền trên từng
              đơn hàng.
            </div>
            <p className="text-blue-700 underline font-semibold hover:cursor-pointer">
              Tìm hiểu thêm
            </p>
          </div>
        </div>
        {/* BANNER */}

        {/* THONG TIN VAN CHUYEN VA  CACH THUC THANH TOAN*/}
        <div className="flex flex-col gap-8">
          <DeliveryInfo
            deliveryInfo={deliveryInfo}
            setDeliveryInfo={setDeliveryInfo}
          />
          <PaymentMethod
            currentPaymentMethod={currentPaymentMethod}
            setCurrentPaymentMethod={setCurrentPaymentMethod}
          />
        </div>
        {/* THONG TIN VAN CHUYEN VA  CACH THUC THANH TOAN */}
      </div>

      {/* SHOW PRODUCTS IN CART */}

      <ShowProductsInCart
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
        user={user}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        deposit={deposit}
        setDeposit={setDeposit}
      />

      {/* SHOW PRODUCTS IN CART */}
    </div>
  );
};

export default Cart;

const deliveryInfoIinitial: deliveryInfoType = {
  name: "",
  phone: "",
  email: "",
  addressDetail: "",
  city: { id: 0, name: "" },
  district: { id: 0, name: "" },
  ward: { id: 0, name: "" },
  note: "",
};
