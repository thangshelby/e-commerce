import React, { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sizes } from "../constants";
import { productType } from "../types";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const ShowProductList = ({
  currentCagory,
  container,
  element,
  setQuantityProducts,
}: {
  currentCagory?: string;
  container?: string;
  element?: string;
  setQuantityProducts?: (quantity: number) => void;
}) => {
  const axiosPrivate = useAxiosPrivate();
  const [allProducts, setAllProducts] = useState<productType[]>([]);
  const [filterProducts, setFilterProducts] = useState<productType[]>([]);

  useLayoutEffect(() => {
    if (allProducts.length == 0) {
      axiosPrivate.get("/product").then((response) => {
        setAllProducts(response.data);

        if (currentCagory == "all") {
          setFilterProducts(response.data);
          setQuantityProducts && setQuantityProducts(response.data.length);
        } else if (currentCagory == "new") {
          setFilterProducts(response.data.slice(0, 4));
        } else if (currentCagory == "popular") {
          setFilterProducts(response.data.slice(4, 8));
        } else {
          const products = response.data.filter(
            (product: productType) => product.category == currentCagory
          );
          setFilterProducts(products);
          setQuantityProducts && setQuantityProducts(products.length);
        }
      });
    }

    if (currentCagory == "all") {
      setFilterProducts(allProducts);
      setQuantityProducts && setQuantityProducts(allProducts.length);
    } else if (currentCagory == "new") {
      setFilterProducts(allProducts.slice(0, 4));
    } else if (currentCagory == "popular") {
      setFilterProducts(allProducts.slice(4, 8));
    } else {
      const products = allProducts.filter(
        (product) => product.category == currentCagory
      );
      setFilterProducts(products);
      setQuantityProducts && setQuantityProducts(products.length);
    }
    
    return () => {
      setFilterProducts([]);
      setAllProducts([]);
    };
  }, [currentCagory]);

  const navigate = useNavigate();

  const [hoverProduct, setHoverProduct] = useState("");
  const [currentSize, setCurrentSize] = useState("");

  const handleChangePath = (productName: string, id: number) => {
    navigate("/product/" + productName.split(" ").join("-") + "/" + id);

    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-row flex-wrap gap-6 justify-between items-center w-full">
      {filterProducts.map((product) => (
        <div
          key={product.id}
          className={`${
            container ? container : "w-[22%] flex-wrap"
          } flex flex-col gap-2 parent`}
        >
          <div
            onClick={() => {
              handleChangePath(product.name, product.id);
            }}
            className={`rounded-[10px] relative overflow-hidden 
            w-full  ${element ? element : "lg:h-[420px] h-[300px] "}  hover:cursor-pointer`}
          >
            <img
              id={product.name}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.src = "../" + product.image;
              }}
              onMouseEnter={() => {
                setHoverProduct(product.name);
              }}
              onMouseLeave={() => {
                setHoverProduct("");
              }}
              src={`${
                hoverProduct == product.name
                  ? product.imageDetail[0]
                  : product.image
              } `}
              alt={product.name}
              className={`w-full  h-full object-cover `}
            />

            <div
              className="absolute bottom-3 left-[41px] flex flex-col gap-4 w-[184px] h-[148px]
             rounded-xl bg-[rgba(199,200,202,0.6)] justify-center items-center    child"
            >
              <h1 className="font-medium">Thêm vào giỏ hàng</h1>

              <div className="flex flex-row flex-wrap gap-2 px-[10px] ">
                {sizes &&
                  sizes.map((size) => (
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

          <p className="text-[20px] text-black font-medium flex overflow-hidden">
            {product.name && product.name?.length >= 20
              ? product.name.slice(0, 20) + " ..."
              : product.name}
          </p>

          <div className="flex flex-row text-[16px] gap-3 font-medium justify-between">
            <div className="text-[#6666] ">
              Giá thuê: &nbsp;
              <span className="text-black">
                <i className="fa-solid fa-dong-sign"></i>
                {product.priceSale / 1000}k
              </span>
            </div>
            <div className="border-r-[1px] border-[#666]" />

            <div className="text-[#6666]">
              Giá bán: &nbsp;
              <span className="text-black ">
                <i className="fa-solid fa-dong-sign"></i>
                {product.priceRent / 1000}k
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowProductList;
