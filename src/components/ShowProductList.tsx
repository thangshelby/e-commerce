import { useState } from "react";
import { products } from "../constants";
import { useNavigate } from "react-router-dom";
import { sizes } from "../constants";

const ShowProductList = ({
  currentCagory,
  container,
  element,
}: {
  currentCagory?: string;
  container?: string;
  element?: string;
}) => {
  const navigate = useNavigate();

  const [hoverProduct, setHoverProduct] = useState<string>("");
  const [currentSize, setCurrentSize] = useState<string>();

  let productsList = products;

  if (currentCagory) {
    if (currentCagory == "new") {
      productsList = products.slice(0, 4);
    } else {
      productsList = products.slice(4, 8);
    }
  }

  const handleChangePathImg = (path: string) => {
    const res = "../public/assets/images/" + path.replace("0", "1") + ".jpg";
    return res;
  };

  const handleChangePath = (productName: string) => {
    navigate("/product/" + productName);

    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-row flex-wrap gap-6 items-center w-full">
      {productsList.slice(0, 11).map((product) => (
        <div
          key={product.path}
          className={`${
            container ? container : "w-[23%]"
          } flex flex-col   gap-2 parent`}
        >
          <div
            onClick={() => {
              handleChangePath(product.titile);
            }}
            className={`rounded-[10px] relative overflow-hidden 
            w-[full]  ${element ? element : "h-[450px]"}  hover:cursor-pointer`}
          >
            <img
              onMouseEnter={() => {
                setHoverProduct(product.path);
              }}
              onMouseLeave={() => {
                setHoverProduct("");
              }}
              src={`${
                hoverProduct == product.path
                  ? handleChangePathImg(product.path)
                  : `../public/assets/images/${product.path}.jpg`
              } `}
              className={`w-full  h-full object-cover `}
            />

            <div
              className="absolute bottom-3 left-[41px] flex flex-col gap-4 w-[184px] h-[148px]
             rounded-xl bg-[rgba(199,200,202,0.6)] justify-center items-center    child"
            >
              <h1 className="font-medium">Thêm vào giỏ hàng</h1>

              <div className="flex flex-row flex-wrap gap-2 px-[10px] ">
                {sizes.map((size) => (
                  <div
                    key={size.size}
                    className={` text-[14px] flex justify-center items-center 
                hover:cursor-pointer  hover:bg-black hover hover:text-white w-[40px] h-[35px]
                 rounded-[6px] ${
                   currentSize == size.size ? "bg-black text-white" : "bg-white"
                 } `}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSize(size.size);
                    }}
                  >
                    {size.size}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-[20px] text-black">
            {product.titile && product.titile?.length >= 23
              ? product.titile.slice(0, 20) + "..."
              : product.titile}
          </p>

          <div className="flex flex-row text-[16px] gap-3 font-medium">
            <div className="text-[#6666] ">
              Giá thuê: &nbsp;
              <span className="text-black">
                <i className="fa-solid fa-dong-sign"></i>
                {product.priceRent.slice(0, product.priceRent.length - 4)}k
              </span>
            </div>
            <div className="border-r-[1px] border-[#666]" />

            <div className="text-[#6666]">
              Giá bán: &nbsp;
              <span className="text-black ">
                <i className="fa-solid fa-dong-sign"></i>
                {product.priceSell.slice(0, product.priceSell.length - 4)}k
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowProductList;
