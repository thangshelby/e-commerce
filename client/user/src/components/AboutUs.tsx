const AboutUs = () => {
  return (
    <div className="flex flex-row h-[550px]">
      <div className="lg:flex hidden bg-[#eae1da] w-[50%] h-full  justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-[40px]  font-medium w-[380px] 
             text-center">
            SẮC LỤA VIỆT  
            <h2>
            HỒN VIỆT TRONG TỪNG TẤC ÁO
            </h2>
          </div>
          <h5 className="w-[260px] content-font text-center">
          Thuê những trang phục truyền thống có chất lượng được thiết kế riêng hoặc mua một bộ để mặc nhiều lần.
          </h5>
          <div>
            <div className="flex flex-row gap-5">
              <div className="bg-black text-white text-[12px] px-[10px] font-semibold w-[150px] rounded-md flex justify-center items-center hover:cursor-pointer hover:bg-[#4f4f4f]">
                THUÊ NGAY
              </div>
              <div className="bg-black text-white text-[12px] p-[10px] font-semibold w-[150px] rounded-md flex justify-center items-center hover:cursor-pointer hover:bg-[#4f4f4f]">
                MUA MỚI
              </div>
            </div>
            <div className="mt-[40px] border-t-[1px] border-black  "></div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="flex flex-row gap-4 justify-center items-center">
              <i className="fa-solid fa-tag"></i>
              <h6 className="opacity-90 ">
                Nhận ưu đãi đặc biệt khi thuê trang phục theo nhóm
              </h6>
            </div>
            <h4 className="text-black font-semibold text-[14px] hover:cursor-pointer ">TÌM HIỂU NGAY<i className="fa-solid fa-arrow-right"></i></h4>
          </div>
        </div>
      </div>
      <div className=" flex justify-end lg:w-[50%] w-full  h-full">
        <img src="../assets/images/aonguthan2.jpg" alt="Cover"
        className="w-full h-full object-cover " />
      </div>
    </div>
  );
};

export default AboutUs;
