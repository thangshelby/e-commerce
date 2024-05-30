import { productsInCart } from "../types";

const NotificationAddCart = ({
  newProduct,
}: {
  newProduct: productsInCart;
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
          src={`../public/assets/images/${newProduct.productInfo.path}.jpg`}
          className="w-[70px] h-[110px] object-cover rounded-xl shadow-2xl  "
        />
        <div className="flex flex-col gap-4">
          <h1 className="font-bold leading-5">
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
