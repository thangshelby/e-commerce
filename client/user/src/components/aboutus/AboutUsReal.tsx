const AboutUsReal = () => {
  return (
    <div className="flex flex-col w-full  ">
      <div className="w-[100%] h-full relative">
        <img
          src="../assets/images/aboutus.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col py-[100px] gap-10">
        {/* !!!! */}
        <div className="flex flex-row w-full  ">
          <div
            className="bg-white w-[100%] text-[#2c2c2c] h-full flex items-center 
         justify-center px-[100px]"
          >
            <div className="flex flex-col justify-center items-start gap-6 px-[30px] py-[30px] w-full">
              <div
                className="text-[30px] leading-[38px] font-medium  w-full flex  items-center 
             header-font"
              >
                Tổng quan về “Sắc lụa Việt”
              </div>
              <div className="text-[18px]  w-full text-start content-font">
                “Sắc lụa Việt” là một nền tảng thương mại điện tử chuyên cung
                cấp các sản phẩm trang phục truyền thống Việt Nam (Việt phục).
              </div>
              <div className="text-[18px] w-full text-start content-font">
                Dự án mong muốn cung cấp một nền tảng mua sắm trực tuyến tiện
                lợi và uy tín, nơi những người có niềm yêu thích với văn hóa
                Việt có thể dễ dàng tìm kiếm và lựa chọn những bộ trang phục ưng
                ý.
              </div>
              <div className="text-[18px] w-full text-start content-font">
                “Sắc lụa Việt” được xây dựng với mục tiêu nâng cao nhận thức về
                vẻ đẹp của trang phục truyền thống Việt Nam. Đội ngũ thực hiện
                dự án luôn nỗ lực để mang đến khách hàng những bộ trang phục
                truyền thống đẹp mắt, được thiết kế tinh xảo, mang đậm bản sắc
                văn hóa dân tộc. Qua đó, góp phần nâng cao nhận thức của khách
                hàng về vẻ đẹp và giá trị của trang phục truyền thống.
              </div>
            </div>
          </div>
        </div>
        {/* !!!! */}

        {/* @@@@ */}
        <div className="flex flex-row w-full  ">
          <div className="bg-[#fff8f2] w-[50%] h-full flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-6 px-[30px] py-[60px]">
              <div
                className="text-[30px] leading-[38px] font-semibold text-center w-full flex justify-center items-center 
              header-font"
              >
                Lý do hình thành ý tưởng
              </div>
              <div className="text-[18px] w-full text-start content-font">
                -Việt Nam, một đất nước với bề dày lịch sử và văn hóa lâu đời,
                là nơi sản sinh ra những trang phục truyền thống độc đáo, mang
                trong mình những câu chuyện, ý nghĩa riêng.
              </div>
              <div className="text-[18px] w-full text-start content-font">
                -Trong những năm gần đây, phong trào mặc Việt phục ngày càng
                được lan tỏa rộng rãi. Giới trẻ lựa chọn trang phục truyền thống
                cho những dịp quan trọng hay sự kiện văn hóa, biểu diễn nghệ
                thuật,… và không ít cách tiếp cận mới mẻ, độc đáo đã để lại ấn
                tượng, thậm chí tạo thành trào lưu.
              </div>
              <div className="text-[18px] w-full text-start content-font">
                -Chính vì thế để thành công với dự án kinh doanh cho thuê Việt
                phục “Sắc lụa Việt” trong thời đại ngày hôm nay,việc xây dựng
                được một website tiện ích để triển khai bán sản phẩm online nhằm
                đáp ứng nhu cầu tiêu dùng và có thể cạnh tranh với các đơn vị
                kinh doanh khác. Với những lý do trên, nhóm chúng em đã lựa chọn
                đề tài “Xây dựng kế hoạch kinh doanh thương mại điện tử cho thuê
                Việt phục – Sắc lụa Việt”
              </div>
            </div>
          </div>

          <div className="w-[50%] ">
            <img
              src="../assets/images/lydohinhthanh.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* @@@@ */}

        {/* ### */}
        <div className="flex flex-row w-full  ">
          <div
            className="bg-white w-[100%] text-[#2c2c2c] h-full flex items-center relative
         justify-center px-[100px]"
          >
            <div className="flex flex-col justify-center items-start gap-6 px-[30px] py-[30px] w-full">
              <div
                className="text-[30px] leading-[38px] font-semibold  w-full flex  items-center 
             header-font"
              >
                Mục tiêu của chúng tôi
              </div>

              <div className="flex flex-row justify-between">
                <div className="text-[18px] font-thin flex flex-col gap-3 w-[30%] text-start content-font ">
                  <div className="w-full h-200px">
                    <img
                      src="../assets/images/sumenh.jpg"
                      className="w-full h-[200px]  rounded-md object-cover shadow-2xl"
                    />
                  </div>
                  <h1 className="text-[20px] font-medium  ">SỨ MỆNH</h1>
                  Bảo tồn và phát huy giá trị văn hóa truyền thống thông qua
                  việc quảng bá trang phục truyền thống Việt Nam.
                </div>
                <div className="text-[18px] font-thin  flex flex-col gap-3 w-[30%] text-start content-font">
                  <div className="w-full h-200px">
                    <img
                      src="../assets/images/tamnhin.jpeg"
                      className="w-full h-[200px]  rounded-md object-cover shadow-2xl"
                    />
                  </div>
                  <h1 className="text-[20px] font-medium  ">Tầm nhìn</h1>
                  Trở thành nền tảng thương mại điện tử hàng đầu về trang phục
                  truyền thống Việt Nam, góp phần đưa trang phục truyền thống
                  Việt Nam đến gần hơn với công chúng trong nước và quốc tế.
                </div>
                <div className="text-[18px] font-thin  flex flex-col gap-3 w-[30%] text-start content-font">
                  <div className="w-full h-200px">
                    <img
                      src="../assets/images/cotloi.png"
                      className="w-full h-[200px]  rounded-md object-cover shadow-2xl"
                    />
                  </div>
                  <h1 className="text-[20px] font-medium  ">Giá trị cốt lõi</h1>
                  Chúng tôi cam kết giữ gìn và phát huy những giá trị truyền
                  thống của trang phục Việt Nam, bảo tồn và phát triển các kỹ
                  thuật may mặc truyền thống. Chúng tôi cung cấp dịch vụ chất
                  lượng cao với trang phục được may từ chất liệu cao cấp, đảm
                  bảo độ bền và tính thẩm mỹ.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ### */}
      </div>
    </div>
  );
};

export default AboutUsReal;
