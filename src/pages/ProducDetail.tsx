import { products, sizes, afterBuys } from "../constants/index";
import { useParams } from "react-router-dom";
import { productType,productStatus } from "../types";
import {
  Announcement,
  OutstandingFeature,
  ShowProductList,
  ReviewProduct,

} from "../components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../pages/Cart/cartSlice";


const ProducDetail = () => {



  const params = useParams();
  const dispatch = useDispatch();

  const [currentProduct, setCurrentProduct] = useState<productType>(
    products[0]
  );

  useEffect(() => {
    const currentProducts = products.filter((product) => {
      return product.titile == params.name;
    });
    setCurrentProduct(currentProducts[0]);
    setCurrentImg(
      "../public/assets/images/" + currentProducts[0].path + ".jpg"
    );


   

  }, [params]);



  const [status, setStatus] = useState("Thuê");
  const [currentSize, setCurrentSize] = useState("S");
  const [currentNumber, setCurrentNumber] = useState<number>(1);
  const [currentImg, setCurrentImg] = useState(
    "../public/assets/images/" + currentProduct.path + ".jpg"
  );
  const reviewNumber = Math.round(Math.random() * (5000 - 1000) + 1000);

  const imgList = [0, 1, 2];
  const handleAddProductToCart = (
    productInfo: productType,
    productMore:productStatus
  ) => {
    dispatch(addProduct({ productInfo,productMore }));
  };

  return (
    <div className="relative flex flex-col w-full justify-center items-center gap-10">

      <Announcement />


      <div className=" flex flex-row w-[1200px] justify-center py-[20px] items-start gap-10 ">
        {/* IMGAGES SESSION */}

        <div className="flex flex-row justify-start h-full items-start gap-4 overflow-hidden">
          {/* SUB IMGAGES */}
          <div className="flex flex-col gap-4 ">
            {imgList.map((index) => (
              <div
                key={index}
                className={`w-[80px] h-[120px] border-[1px]  hover:cursor-pointer
              ${
                currentImg ==
                "../public/assets/images/" +
                  currentProduct.path.replace("0", String(index)) +
                  ".jpg"
                  ? "border-black opacity-100"
                  : "opacity-60"
              }
              `}
                onClick={() => {
                  setCurrentImg(
                    "../public/assets/images/" +
                      currentProduct.path.replace("0", String(index)) +
                      ".jpg"
                  );
                }}
              >
                <img
                  src={
                    "../public/assets/images/" +
                    currentProduct.path.replace("0", String(index)) +
                    ".jpg"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* SUB IMGAGES */}

          {/* MAIN IMGAGES */}
          <div className="w-[430px] h-full rounded-xl">
            <img
              className="w-full object-cover h-[600px] "
              src={currentImg}
              alt={currentProduct.titile}
            />
          </div>
          {/* MAIN IMGAGES */}
        </div>
        {/* IMGAGES SESSION */}

        {/* DESCRIPTION SESSION */}
        <div className="w-[400px] text-black flex flex-col gap-5 leading-8">
          <h1 className="text-[30px] ">{currentProduct.titile}</h1>
          <div className="text-[#666] text-[12px] font-thin flex flex-row gap-1 items-center justify-start">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            {reviewNumber} đánh giá
          </div>

          <div className="text-[16px] flex flex-col gap-8">
            <div className="flex flex-row gap-5">
              <div
                className={`flex flex-row font-bold hover:cursor-pointer 
            justify-center items-center  w-full ${
              status == "Mua" && "opacity-30"
            }`}
                onClick={() => {
                  setStatus("Thuê");
                }}
              >
                THUÊ &nbsp;
                <i className="fa-solid fa-dong-sign"></i>
                <p className="text-[#666]"> {currentProduct.priceRent}</p>
              </div>
              <div
                className={`flex flex-row font-bold hover:cursor-pointer 
              justify-center items-center w-full ${
                status != "Mua" && "opacity-30"
              }`}
                onClick={() => {
                  setStatus("Mua");
                }}
              >
                MUA &nbsp;
                <i className="fa-solid fa-dong-sign"></i>
                <p className="text-[#666]">{currentProduct.priceSell} </p>
              </div>
            </div>
            {/* DESCRIPTION */}
            <div className="w-full h-[2px]  bg-[#ccc] flex flex-row">
              <div
                className={`w-[50%] h-full ${status == "Thuê" && "bg-black"}`}
              ></div>
              <div
                className={`w-[50%] h-full ${status == "Mua" && "bg-black"}`}
              ></div>
            </div>
            <div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <i className="fa-solid fa-truck-fast"></i>
                Miễn phí với đơn hàng trên 1.000.000
              </div>
              {status == "Thuê" && (
                <div>
                  <div className="flex flex-row gap-2 justify-start items-center">
                    <i className="fa-solid fa-house"></i>
                    Kiểm tra kích thước
                    <p className="text-[#0A8080] font-semibold hover:cursor-pointer">
                      ngay tại nhà{" "}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex flex-row gap-2 justify-start items-center">
                <i className="fa-solid fa-receipt"></i>
                Giao hàng trong 2-3 ngày
              </div>
            </div>
            {/* SIZE CHOOSING */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-row ">
                <div className="flex flex-row gap-1">
                  Kích thước
                  <p className="font-bold text-black">{currentSize}</p>
                  {sizes.find((size) => size.size == currentSize)?.description}
                </div>
              </div>

              <div className="flex flex-row gap-1">
                {sizes.map((size) => (
                  <div
                    key={size.size}
                    className={` text-[14px] flex justify-center items-center 
                hover:cursor-pointer hover:opacity-60  w-[60px] h-[40px]
                 rounded-xl ${
                   currentSize == size.size
                     ? "bg-black text-white"
                     : "bg-[#d9d9d9]"
                 } `}
                    onClick={() => {
                      setCurrentSize(size.size);
                    }}
                  >
                    {size.size}
                  </div>
                ))}
              </div>
            </div>
            {/* SIZE CHOOSING */}

            {/* NUMBER */}
            <div className="flex flex-row gap-3  ">
              <div
                className="flex flex-row gap-5 justify-center items-center border-black 
                border-[1px] px-[14px] py-[4px] rounded-[20px]"
              >
                <i
                  className="fa-solid fa-minus hover:cursor-pointer "
                  onClick={() => {
                    setCurrentNumber(currentNumber - 1);
                  }}
                ></i>
                <h1 className="text-[18px] font-medium">{currentNumber}</h1>
                <i
                  className="fa-solid fa-plus hover:cursor-pointer"
                  onClick={() => {
                    setCurrentNumber(currentNumber + 1);
                  }}
                ></i>
              </div>

              <div
                onClick={() => {  
                  handleAddProductToCart(currentProduct, {
                    quantity: currentNumber,
                    status: status,
                    size: currentSize,
                  });
                }}
                className="flex w-full rounded-2xl bg-black text-white justify-center 
              items-center font-medium gap-2 hover:cursor-pointer hover:bg-[#d9d9d9] hover:text-black"
              >
                <i className="fa-solid fa-bag-shopping"></i>
                Thêm vào giỏ hàng
              </div>
            </div>
            {/* NUMBER */}

            {/* AFTER BUY */}
            <div className="border-y-[1px] py-[20px] border-[#ccc] flex flex-col gap-8  ">
              <div
                className="text-[#2f5acf] text-[13px] font-medium flex
                   items-center justify-start  gap-2 hover:cursor-pointer w-full"
              >
                <img
                  src="https://page.widget.zalo.me/static/images/2.0/Logo.svg"
                  className="w-[30px] h-[30px]"
                />
                Chat để được chúng tôi tư vấn ngay (8:30 - 22:00)
              </div>

              <div className="flex flex-row flex-wrap gap-y-4">
                {afterBuys.map((afterBuy) => (
                  <div
                    key={afterBuy.title}
                    className="flex flex-row gap-1 
                      justify-start items-center leading-5
                      w-[50%]"
                  >
                    <img src={afterBuy.icon} className="w-[30px] h-[30px]" />
                    <p className="text-[12px] font-medium leading-[15px]">
                      {afterBuy.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* AFTER BUY */}
          </div>
        </div>
        {/* DESCRIPTION SESSION */}
      </div>
      {/* REVIEW SESSION */}
      <OutstandingFeature />
      {/* REVIEW SESSION */}

      <div
        className="w-full bg-[#f9f9f9] pt-[50px] pb-[100px] 
      px-[12px] flex flex-col gap-10 items-center justify-center "
      >
        <h1 className="text-[28px] text-[#231f30] font-bold">
          Gợi ý sản phẩm tương tự
        </h1>
        <ShowProductList currentCagory="new" />
      </div>

      <ReviewProduct />


    </div>
  );
};

export default ProducDetail;
