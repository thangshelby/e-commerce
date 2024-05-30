import { useState } from "react";
import { products, navbarLinks } from "../constants";
import { ShowProductList } from "../components";

const Collection = () => {
  const status = ["TẤT CẢ", "CHO THUÊ", "BÁN"];
  const [currentStatus, setCurrentStatus] = useState("TẤT CẢ");
  const [currentCagories, setCurrentCagories] = useState<
    Record<string, boolean>
  >({
    "ÁO DÀI": false,
    "ÁO BÌNH": false,
    "ÁO BÀ BA": false,
    "ÁO TỨ THÂN": false,
    "ÁO CHÀM": false,
  });


  const handleCategoryChange = (event: any) => {
    const { name, checked } = event.target;
    setCurrentCagories((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };
  return (
    <div className="flex flex-col  gap-6 w-full ">
      {/* IMAGES */}
      <div className="w-full h-[360px]">
        <img
          src="../public/assets/images/bgcollection.jpg"
          className="w-full h-full "
        />
      </div>
      {/* IMAGES */}

      <div className="flex flex-col w-full">
        {/* STATUS */}
        <div
          className="flex flex-row justify-start pl-[248px] w-full text-[16px]
        text-[#666666]"
        >
          {status.map((item) => (
            <div
              onClick={() => {
                setCurrentStatus(item);
              }}
              key={item}
              className={`${
                currentStatus == item
                  ? "text-black py-[6px]  border-black border-b-[2px]"
                  : "border-[#e3e3e3]"
              } w-[220px]
                 row_center font-[700]  hover:cursor-pointer border-b-[2px] `}
            >
              {item}
            </div>
          ))}
        </div>
        {/* STATUS */}

        <div
          className="bg-[#f1f1f1]  px-[16px]
         py-[20px] shadow-2xl flex  flex-row gap-5 w-full"
        >
          {/* FILTERS */}
          <div className="min-w-[216px] pl-[20px]  flex flex-col  gap-4">
            <h1 className="text-[14px] font-bold">Category</h1>
            {navbarLinks[0].children?.map((category) => (
              <div
                key={category.title}
                className="text-[14px] hover:cursor-pointer  font-medium flex flex-row "
              >
                <input
                  name={category.title}
                  className="h-5 w-5 border-grey-400 rounded-sm text-black cursor-pointer"
                  type="checkbox"
                  checked={currentCagories[category.title]}
                  onChange={(e) => {
                    handleCategoryChange(e);
                  }}
                ></input>

                <div
                  className={`${
                    currentCagories[category.title] == true
                      ? "font-bold"
                      : "font-normal"
                  }  ml-3 text-sm whitespace-nowrap `}
                >
                  {category.title}
                </div>
              </div>
            ))}
          </div>
          {/* FILTERS */}

          {/* SHOW PRODUCTS */}
          <div className="flex flex-col gap-6 pb-[200px]">
            <h1 className="text-[14px] font-normal">
              {products.length} Sản phẩm
            </h1>
            <ShowProductList currentCagory="" container="w-[270px]" element=" h-[380px] "/>

            {/* <div className="flex  flex-row flex-wrap gap-5 w-full">
              {products.map((product) => (
                <div
                  key={product.titile}
                  className="w-[270px] shadow-2xl rounded-xl overflow-hidden"
                >
                  <img
                    src={`../public/assets/images/${product.path}.jpg`}
                    className="w-full h-[380px]  object-cover"
                  />
                  <div>
                    <h1>

                    </h1>
                    </div>


                </div>
              ))}
            </div> */}
          </div>
          {/* SHOW PRODUCTS */}
        </div>
      </div>
    </div>
  );
};

export default Collection;
