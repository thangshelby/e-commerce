import { paymentMethods, sizes } from "../../constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useProductSelector } from "../../store/selector";
import { productsInCart } from "../../types";

const Cart = () => {
  const productsInCart: [productsInCart] = useSelector(useProductSelector);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [total, setTotal] = useState("1.490.000");

  const [currentPaymentMethod, setCurrentPaymentMethod] = useState(
    paymentMethods[0]
  );

  const handleCalculateTotal = (price: string, quantity: any) => {
    const newPrice = price.replace(".", "");

    // setTotal(Number(newPrice) * quantity + total);
    return String(Number(newPrice) * quantity);
  };

  const handleChecked = (title: string) => {
    console.log(title);
  };

  return (
    <div className="relative flex flex-row p-[16px] text-title ">
      {/* TOTAL */}
      <div
        className="fixed left-0 bottom-[0] z-30
      text-[16px] text-title font-medium w-full h-[95px] flex flex-row"
      >
        <div className="w-[50%] h-full bg-[#eaeefa] row_center gap-3">
          <div className="w-[50%] flex flex-row justify-center  items-center gap-4  border-r-[1px] border-[#ccc]">
            <img
              src={currentPaymentMethod.icon}
              className="w-[35px] h-[30px]"
            />
            <div className="flex flex-col">
              {currentPaymentMethod.title}
              <span>
                {currentPaymentMethod.description &&
                  currentPaymentMethod.description}
              </span>
            </div>
          </div>

          <div className="w-[50%] flex flex-row text-[#2f5acf] font-bold">
            Chưa dùng mã giảm giá
          </div>
        </div>

        <div className="w-[50%] h-full bg-white text-black row_center gap-3">
          <div
            className="w-[50%] flex flex-col justify-evenly
          items-end   text-[14px] text-title"
          >
            <div className="row_center gap-1">
              Thành tiền
              <div className="text-[20px] font-bold text-[#2f5acf]">
                {total}
              </div>
            </div>

            <div className="opacity-80">Đăng nhập để tiết kiệm 741.000đ</div>
          </div>

          <div
            className="bg-black text-white 
          font-semibold text-[16px] px-[20px] py-[16px] w-[190px] row_center  rounded-[30px] hover:cursor-pointer"
          >
            Đặt hàng
          </div>
        </div>
      </div>
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

        {/* THONG TIN VAN CHUYEN */}
        <div className="flex flex-col gap-8">
          <h1 className="text-[30px] font-bold font-serif">
            Thông tin vận chuyển
          </h1>

          <form className="flex flex-col gap-6">
            <div className="flex flex-row gap-2">
              <div className="flex flex-col  w-[49%] text-[#000000B3]">
                <label className="w-[50%] font-semibold">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nhập tên của bạn"
                  className="w-full px-[16px] py-[8px] rounded-2xl border 
                  border-[#f1f1f1] focus:outline-none focus:text-black  focus:border-blue-700"
                />
              </div>

              <div className="flex flex-col  w-[49%] text-[#000000B3]">
                <label className="w-[50%] font-semibold">Số điện thoại</label>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại của bạn"
                  className="w-full px-[16px] py-[8px] rounded-2xl border 
                  border-[#f1f1f1] focus:outline-none focus:text-black  focus:border-blue-700"
                />
              </div>
            </div>

            <div className="flex flex-col  w-[full] text-[#000000B3]">
              <label className="w-[50%] font-semibold">Email</label>
              <input
                type="text"
                placeholder="Nhập Email của bạn"
                className="w-full px-[16px] py-[8px] rounded-2xl border 
                  border-[#f1f1f1] focus:outline-none focus:text-black  focus:border-blue-700"
              />
            </div>
            <div className="flex flex-col  w-[full] text-[#000000B3]">
              <label className="w-[50%] font-semibold">Đia chỉ</label>
              <input
                type="text"
                placeholder="Địa chỉ(ví dụ: Số 669 Quốc lộ 1, Khu phố 6, Phường Linh Xuân)"
                className="w-full px-[16px] py-[8px] rounded-2xl border 
                  border-[#f1f1f1] focus:outline-none focus:text-black  focus:border-blue-700"
              />
            </div>
            <div className="w-full flex flex-row justify-between">
              <input
                type="text"
                placeholder="Tỉnh/Thành phố"
                className="w-[31%] px-[16px] py-[8px] rounded-2xl border 
                  border-[#f1f1f1] focus:outline-none focus:text-black  focus:border-blue-700"
              />
              <input
                type="text"
                placeholder="Quận/Huyện"
                className="w-[31%] px-[16px] py-[8px] rounded-2xl border 
                  border-[#f1f1f1] focus:outline-none focus:text-black  focus:border-blue-700"
              />
              <input
                type="text"
                placeholder="Phường/Xã"
                className="w-[31%] px-[16px] py-[8px] rounded-2xl border 
                  border-[#f1f1f1] focus:outline-none focus:text-black  focus:border-blue-700"
              />
            </div>

            <div className="flex flex-col  w-[49%] text-[#000000B3]">
              <label className="w-[50%] font-semibold">Ghi chú</label>
              <input
                type="text"
                placeholder="Ghi chú thêm(ví dụ: Giao hàng vào buổi sáng)"
                className="w-full px-[16px] py-[8px] rounded-2xl border 
                  border-[#f1f1f1] focus:outline-none focus:text-black  focus:border-blue-700"
              />
            </div>
          </form>

          <h1 className="text-[30px] font-bold font-serif">
            Hình thức thanh toán
          </h1>

          <div className="flex flex-col gap-4">
            {paymentMethods.map((method) => (
              <div
                onClick={() => setCurrentPaymentMethod(method)}
                key={method.title}
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
                    type="radio"
                    className="rounded-[50%]"
                    onChange={() => {
                      handleChecked(method.title);
                    }}
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
        {/* THONG TIN VAN CHUYEN */}
      </div>

      {/* SHOW PRODUCT ADD TO CART */}
      <div className="flex flex-col gap-4 p-[16px] w-[40%]">
        <h1 className="text-[30px] font-bold font-serif">Giỏ hàng</h1>

        <div className="flex flex-row justify-between text-[#00000066] text-[12px] ">
          <div className="flex flex-row gap-2 justify-center items-center">
            <input type="checkbox" className="w-[20px] h-[20px]" />
            <div>TẤT CẢ SẢN PHẨM</div>
          </div>
          <div className="flex flex-row gap-8">
            <div>SỐ LƯỢNG</div>
            <div>GIÁ</div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {productsInCart.map((product, index) => (
            <div
              key={index}
              className="pt-[20px] border-t-[1px] border-[#ccc] 
             flex flex-row  items-center gap-4"
            >
              <div className="flex flex-row justify-center items-center gap-3">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                <div className="w-[90px] h-[140px]">
                  <img
                    src={`../public/assets/images/${product.productInfo.path}.jpg`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <h1 className="font-medium leading-5">
                  {product.productInfo.titile}
                </h1>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row gap-3 ">
                    <div
                      className="bg-[#f1f1f1] rounded-2xl 
                  font-medium py-[6px]  min-w-[80px] text-title flex items-center justify-center"
                    >
                      {product.productMore.status}
                    </div>

                    <div
                      className="flex flex-row gap-3 justify-center items-center border-black 
                border-[1px] w-[90px] px-[4px] py-[4px] rounded-[20px]"
                    >
                      <i
                        className="fa-solid fa-minus hover:cursor-pointer "
                        onClick={() => {
                          setCurrentNumber(currentNumber - 1);
                        }}
                      ></i>
                      <h1 className="text-[18px] font-medium">
                        {currentNumber}
                      </h1>
                      <i
                        className="fa-solid fa-plus hover:cursor-pointer"
                        onClick={() => {
                          setCurrentNumber(currentNumber + 1);
                        }}
                      ></i>
                    </div>

                    <div className="font-bold">
                      {product.productMore.status != "Thuê"
                        ? `${handleCalculateTotal(
                            product.productInfo.priceSell,
                            product.productMore.quantity
                          )} đ`
                        : `${handleCalculateTotal(
                            product.productInfo.priceRent,
                            product.productMore.quantity
                          )} đ`}
                    </div>
                  </div>

                  <select
                    className="bg-[#f1f1f1] rounded-2xl 
                  font-medium py-[6px] px-[20px] w-[70px] text-title flex flex-row items-center justify-center"
                  >
                    {sizes.map((size) => (
                      <option key={size.size} className="font-medium">
                        {size.size}
                      </option>
                    ))}
                    {product.productMore.size}
                  </select>

                  <div className="row_center w-[50px] gap-1 hover:cursor-pointer opacity-85">
                    <i className="fa-solid fa-trash-can"></i>
                    <span>Xóa </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* SHOW PRODUCT ADD TO CART */}
    </div>
  );
};

export default Cart;
