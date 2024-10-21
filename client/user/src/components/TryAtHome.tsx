const Showroom = () => {
    return (
      <div className="up-to-down flex flex-row w-full h-[550px] ">
       
        <div
          className="bg-[#fff8f2] w-[50%] h-full flex itemcenter justify-center
        "
        >
          <div className="flex flex-col justify-center items-center gap-10 ">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F237d949b85ef43418ef6822b2d7ef3e3%2F7483310430e14bb6911dc5d29ccbaaad?width=40"
              className="w-[50px] h-[50px] object-center"
            />
            <div className="text-[34px] leading-[38px] text-center w-[280px] flex justify-center items-center header-font">Thử miến phí tại nhà</div>
            <div className="text-[18px] w-[340px] text-center content-font">
          Kiểm tra kích thước và chất lượng sản phẩm miễn phí tại nhà trước khi quyết định mua.
            </div>
  
            <div
              className="text-[#ffff]  bg-black hover:cursor-pointer hover:bg-[#ccc] 
         px-[24px] py-[12px] rounded-md font-medium "
            >
              Thử miễn phí
            </div>
          </div>
        </div>

        <div className="w-[50%] h-[550px]">
          <img
            src="../assets/images/package.jpg"
            className="w-full h-full "
          />
        </div>
      </div>
    );
  };
  
  export default Showroom;
  