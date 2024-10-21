import { footerItems } from "../constants";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col w-full p-[30px] ">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col gap-10 w-[30%]">
          <div className="flex flex-col gap-2 text-white">
            <h3 className="text-[23px] font-medium ">
              SẮC LỤA VIỆT lắng nghe bạn!
            </h3>
            <h6 className="text-[13px] ">
              Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
              góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
              phẩm tốt hơn nữa. Đóng góp ý kiến
            </h6>
          </div>

          <div
            className={`bg-[#2f5acf] text-gray-300 font-bold text-[14px]
          py-[8px] rounded-2xl w-[160px] flex justify-center items-center hover:cursor-pointer hover:bg-white hover:text-black`}
          >
            <h1>Đóng góp ý kiến</h1>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-[30%]">
          <div className="flex flex-row items-center gap-4">
            <img src="https://www.coolmate.me/images/footer/icon-hotline.svg" />

            <div className="flex flex-col gap-1 text-white">
              <p className="text-[13px] font-medium">Hotline</p>
              <p className="text-[16px] font-bold">1900.272737-028.7777.2737</p>
              <p className="text-[16px] font-bold">(8:00 - 22:00)</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4">
            <img src="https://www.coolmate.me/images/footer/icon-email.svg" />

            <div className="flex flex-col gap-1 text-white">
              <p className="text-[13px] font-medium">Email</p>
              <p className="text-[16px] font-bold">sacluaviet@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex  items-center gap-3 w-[30%]">
          <div className="flex flex-row gap-10 flex-wrap">
            <img
              src="https://mcdn.coolmate.me/image/June2023/mceclip2_68.png"
              className="w-[33px] h-[55px] "
            />
            <img
              src="https://mcdn.coolmate.me/image/June2023/mceclip0_62.png"
              className="w-[33px] h-[55px] "
            />
            <img
              src="https://www.coolmate.me/images/footer/icon-instar.svg"
              className="w-[33px] h-[55px] "
            />
            <img
              src="https://www.coolmate.me/images/footer/icon-youtube.svg"
              className="w-[33px] h-[55px] "
            />
          </div>
        </div>
      </div>

      <div className="border-t-[1px] border-[#4f4f4f]  my-[40px] " />

      <div className="flex flex-wrap gap-y-10 flex-col h-[320px] ">
        {footerItems.map((item, index) => (
          <div key={index} 

          className="flex flex-col flex-wrap gap-3 text-white text-[14px] font-extrabold w-[25%]">
            <div>{Object.keys(item)}</div>
            <div className="flex flex-col gap-2 ">
              {Object.values(item)[0].map((subItem:string,) => (
                <div key={subItem}
                className="text-[13px] text-[#D9D9D9] font-normal hover:cursor-pointer hover:text-[#f9f86c]"
                >
                  {subItem}</div>
              ))}
              </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Footer;
