import React, { SetStateAction } from "react";
import { paymentMethods } from "../constants/index";

const PaymentMethod = ({
  currentPaymentMethod,
  setCurrentPaymentMethod,
}: {
  currentPaymentMethod: { title: string; description?: string; icon: string };
  setCurrentPaymentMethod: React.Dispatch<
    SetStateAction<{ title: string; description: string; icon: string }>
  >;
}) => {
  return (
    <div>
      <h1 className="text-[30px] font-bold font-serif">Hình thức thanh toán</h1>
      <div className="flex flex-col gap-4">
        {paymentMethods.map((method, index) => (
          <div
            onClick={() => setCurrentPaymentMethod(method)}
            key={index}
            className={`w-full flex flex-row gap-4 items-center 
    p-[16px] border border-[#f1f1f1] rounded-2xl hover:cursor-pointer hover:shadow-lg ${
      currentPaymentMethod.title === method.title
        ? "opacity-100 outline-none border-blue-700 "
        : "opacity-60 "
    }`}
          >
            <div className="rounded-[50%] overflow-hidden">
              <input
                checked={currentPaymentMethod.title == method.title}
                readOnly
                type="radio"
                className="rounded-[50%]"
              />
            </div>
            <img src={method.icon} className="w-[50px] h-[50px]" />
            <div className="flex flex-col text-[14px]  font-medium">
              <span>{method.title}</span>
              <span>{method.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;
