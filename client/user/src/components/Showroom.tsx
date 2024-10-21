const Showroom = () => {
  return (
    <div className="flex flex-row w-full h-[550px] ">
    
      <div className="left-to-right w-[50%] h-[550px]">
        <img
          src="../assets/images/showroom2.jpg"
          className="w-full h-full object-center"
        />
      </div>

      <div
        className="right-to-left bg-[#e9f0fa] w-[50%] h-full flex itemcenter justify-center
      "
      >
        <div className="flex flex-col justify-center items-center gap-12 ">
          <img
            src="../assets/images/logo.png"
            className="w-[50px] h-[50px] "
          />
          <div className="text-[34px] leading-[38px] text-center w-[280px] flex justify-center items-center">Tham quan tại cửa hàng trực tiếp</div>
          <div className="text-[18px] w-[340px] text-center">
            Bạn sẽ được làm việc với chuyên gia thời trang của chúng tôi để tìm
            kiếm trang phục hoàn hảo cho bất kỳ dịp nào.
          </div>

          <div
            className="text-[#ffff]  bg-black hover:cursor-pointer hover:bg-[#ccc] 
       px-[24px] py-[12px] rounded-md font-medium "
          >
            Đặt lịch hẹn với chúng tôi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showroom;
