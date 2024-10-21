import {  productsInCartType } from "../types";

const NotificationAddCart = ({
  newProduct,
}: {
  newProduct: productsInCartType;
}) => {
  return (
    <div
      className="flex flex-col gap-5 bg-white rounded-2xl w-[300px] 
    p-[20px] z-20 shadow-2xl mb-[10px]"
    >
      <h1
        className="text-[14px] text-title font-bold w-full 
        border-b-[1px] border-boder_color pb-[20px]"
      >
        Đã thêm vào giỏ hàng !
      </h1>

      <div className="row_center gap-2">
        <img
          src={`../${newProduct.image}`}
          className="w-[70px] h-[110px] object-cover rounded-xl shadow-2xl  "
        />
        <div className="flex flex-col gap-4">
          <h1 className="font-bold leading-5">
            {newProduct.name}
          </h1>
          <div>
            <p>size {newProduct.size}</p>
            <p>
              {" "}
              {newProduct.status != "Thuê"
                ? newProduct.priceSale
                : newProduct.priceRent}
              đ
            </p>
          </div>
        </div>
      </div>

      <div
        className="border-[2px] border-black py-[8px] text-[14px] 
      font-medium rounded-3xl row_center hover:cursor-pointer hover:bg-black 
      hover:text-white button_hover "
      >
        Xem giỏ hàng
      </div>
    </div>
  );
};

export default NotificationAddCart;
