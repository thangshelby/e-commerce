
const Rental = () => {
    window.scrollTo(0,0)
  return (
    <div className="w-full  mb">
      <div className="w-full h-full">
        <img
          src="../assets/images/rental.jpg"
          className="object-cover scale-105"
        />
      </div>

      <div
        className="bg-[#CFE3E5] w-full p-[64px] flex flex-col gap-16
       justify-center items-center text-[32px] text-black font-semibold "
      >
        <h1 className=" mb-[20px] text-center">
          Các bước đơn giản để có được sản phẩm ưng ý
        </h1>

        <div className="flex flex-row ">
          <div className="w-[32%] px-[24px] flex flex-col gap-4 justify-start items-center border-r-[2px] border-[#ccc] border-h-0%]">
            <h4 className="text-[12px] text-[#666666] font-semibold">
              BƯỚC 1{" "}
            </h4>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="w-[60px] h-[60px]"
            >
              <path d="M179.8-0.1H20.1C8.9-0.1-0.2,8.9-0.2,20.1v113.2c0,11.2,9.1,20.3,20.3,20.3h10.1v42.9c0,1.4,0.9,2.7,2.2,3.3 c0.4,0.2,1,0.3,1.5,0.3c0.9,0,1.7-0.3,2.4-0.9l52.3-45.7h91.3c11.2,0,20.3-9.1,20.3-20.3V20.1C200.1,8.9,191-0.1,179.8-0.1z M33.9,146.3H20.1c-7.2,0-13-5.8-13-13V20.1c0-7.2,5.8-13,13-13h159.9c7.2,0,13,5.8,13,13v113h-0.1v0.2c0,7.2-5.8,13-13,13H87.2 c-0.9,0-1.7,0.3-2.4,0.9l-47.3,41.3v-38.6C37.5,148,35.8,146.3,33.9,146.3z"></path>
              <path d="M53.2,117.1c6.4,0,16.5-3.1,23.5-9.8l9.5-12.7c2,2.1,4.5,3.3,7.2,3.3h13.7c2.7,0,5.4-1.2,7.2-3.3l9.2,12.4l0.3,0.3 c6.7,6.7,16.9,9.8,23.5,9.8h15c7.3,0,8.1-5.2,8.1-7.4V44.8c0-1.7-0.6-7.4-8.1-7.4h-15c-6.4,0-16.5,3.1-23.5,9.8 c-0.1,0.1-0.3,0.3-0.3,0.5l-9.5,12.6c-1.9-1.9-4.3-2.9-6.9-2.9H93.5c-2.5,0-5.1,1.1-6.9,2.9L77,47.6c-0.1-0.1-0.1-0.1-0.2-0.3 l-0.1-0.1c-6.8-6.7-17-9.8-23.5-9.8h-15c-7.3,0-8.1,5.2-8.1,7.4v64.9c0,1.7,0.6,7.4,8.1,7.4H53.2z M83.6,73.6H62.3 c-2,0-3.6,1.6-3.6,3.6c0,2,1.6,3.6,3.6,3.6h21.4v5l-12.2,16.4c-5.1,5-13,7.6-18.2,7.6H38.2c-0.3,0-0.6,0-0.9,0c0,0,0-0.1,0-0.1v-65 c0.2,0,0.6,0,0.9,0h15c5.2,0,13,2.6,18.1,7.6l12.2,16.2V73.6z M109.9,88c0,1.5-1.2,2.7-2.7,2.7H93.5c-1.5,0-2.7-1.2-2.7-2.7V67.1 c0-1.5,1.1-2.6,2.7-2.6h13.7c1.5,0,2.7,1.1,2.7,2.6V88z M142.2,77.1c0-2-1.6-3.6-3.6-3.6h-21.4v-5.3l12.1-16.1 c5.1-5,13-7.6,18.2-7.6h15c0.4,0,0.7,0,0.9,0c0,0,0,0.1,0,0.1v65.1c-0.2,0-0.6,0-0.9,0h-15c-5.2,0-13-2.6-18.1-7.6l-12.1-16.3v-5.2 h21.4C140.6,80.8,142.2,79.2,142.2,77.1z"></path>
            </svg>

            <h4 className="text-[14px] text-black font-semibold">
              Lựa chọn phong cách phù hợp{" "}
            </h4>
            <span className="text-[14px] text-black font-normal text-center">
              Chọn từ những bộ trang phục hoàn chỉnh do nhà tạo mẫu của chúng
              tôi lựa chọn hoặc xây dựng giao diện tùy chỉnh.
            </span>
          </div>

          <div className="w-[32%] px-[24px] flex flex-col gap-4 justify-start items-center border-r-[2px] border-[#ccc] border-h-0%]">
            <h4 className="text-[12px] text-[#666666] font-semibold">
              BƯỚC 2{" "}
            </h4>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 198 200"
              className="w-[60px] h-[60px]"
            >
              <path d="M39.7,0.7v147.9H10.9c-2.3,0-4.1,1.8-4.1,4.1c0,0,0,0,0,0c0,27.8,16.9,46.5,42.1,46.5h105.2c0.8,0,1.6-0.3,2.2-0.7 c20-3.7,34.9-22.5,34.9-45.8V0.7H39.7z M95.2,191H48.9c-19.3,0-32.2-13.2-33.7-34.1h105.6c1.5,15.8,11.5,27.2,19.8,34.1H95.2z M91.2,148.7H73.8v-16.1h17.4L91.2,148.7z M183,152.8c0,19.4-12.2,34.9-28.6,37.7c-5.8-3.4-25.5-16.5-25.5-37.7 c0-2.3-1.8-4.1-4.1-4.1c0,0,0,0,0,0H99.5v-20.2c0-2.3-1.8-4.1-4.1-4.1c0,0,0,0,0,0H69.7c-2.3,0-4.1,1.8-4.1,4.1c0,0,0,0,0,0v20.2 H48V9h135V152.8z"></path>
              <path d="M69.7 65.8h25.6c2.3 0 4.1-1.8 4.1-4.1V36.1c0-2.3-1.8-4.1-4.1-4.1 0 0 0 0 0 0H69.7c-2.3 0-4.1 1.8-4.1 4.1 0 0 0 0 0 0v25.7C65.6 64 67.4 65.8 69.7 65.8zM73.8 40.2h17.4v17.4H73.8V40.2zM69.7 112h25.6c2.3 0 4.1-1.8 4.1-4.1 0 0 0 0 0 0V82.2c0-2.3-1.8-4.1-4.1-4.1 0 0 0 0 0 0H69.7c-2.3 0-4.1 1.8-4.1 4.1 0 0 0 0 0 0v25.6C65.6 110.2 67.4 112 69.7 112 69.7 112 69.7 112 69.7 112zM73.8 86.4h17.4v17.4H73.8V86.4z"></path>
            </svg>

            <h4 className="text-[14px] text-black font-semibold">
              Sắp xếp bữa tiệc của bạn{" "}
            </h4>
            <span className="text-[14px] text-black font-normal text-center">
              Chuẩn bị cho bữa tiệc hoàn hảo với bộ sưu tập thời trang của chúng
              tôi.Chúng tôi có mọi thứ bạn cần để tỏa sáng trong mọi dịp.
            </span>
          </div>

          <div className="w-[32%] px-[24px] flex flex-col gap-4 justify-start items-center border-r-[2px] border-[#ccc] border-h-0%]">
            <h4 className="text-[12px] text-[#666666] font-semibold">BƯỚC 3</h4>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="w-[60px] h-[60px]"
            >
              <path
                fill-rule="evenodd"
                d="M178.684,192.566 L192.709,192.566 L192.709,146.01 L178.684,146.01 L178.684,192.566 Z M7.291,146.01 L24.709,146.01 L24.709,164.606 C24.709,166.618 26.34,168.251 28.355,168.251 C30.37,168.251 32,166.618 32,164.606 L32,146.01 L53.52,146.01 L53.52,164.606 C53.52,166.618 55.15,168.251 57.165,168.251 C59.18,168.251 60.811,166.618 60.811,164.606 L60.811,146.01 L82.327,146.01 L82.327,164.606 C82.327,166.618 83.957,168.251 85.972,168.251 C87.987,168.251 89.617,166.618 89.617,164.606 L89.617,146.01 L111.134,146.01 L111.134,164.606 C111.134,166.618 112.764,168.251 114.779,168.251 C116.794,168.251 118.425,166.618 118.425,164.606 L118.425,146.01 L139.94,146.01 L139.94,164.606 C139.94,166.618 141.571,168.251 143.586,168.251 C145.601,168.251 147.231,166.618 147.231,164.606 L147.231,146.01 L171.393,146.01 L171.393,192.566 L7.291,192.566 L7.291,146.01 Z M185.975,61.137 L88.762,138.72 L14.063,138.72 L111.417,61.137 L185.975,61.137 Z M7.291,53.846 L21.313,53.846 L21.313,7.291 L7.291,7.291 L7.291,53.846 Z M192.709,53.846 L28.604,53.846 L28.604,7.291 L52.769,7.291 L52.769,25.886 C52.769,27.9 54.399,29.531 56.414,29.531 C58.429,29.531 60.06,27.9 60.06,25.886 L60.06,7.291 L81.575,7.291 L81.575,25.886 C81.575,27.9 83.206,29.531 85.221,29.531 C87.236,29.531 88.866,27.9 88.866,25.886 L88.866,7.291 L110.383,7.291 L110.383,25.886 C110.383,27.9 112.013,29.531 114.028,29.531 C116.043,29.531 117.673,27.9 117.673,25.886 L117.673,7.291 L139.189,7.291 L139.189,25.886 C139.189,27.9 140.82,29.531 142.835,29.531 C144.85,29.531 146.48,27.9 146.48,25.886 L146.48,7.291 L167.996,7.291 L167.996,25.886 C167.996,27.9 169.627,29.531 171.642,29.531 C173.656,29.531 175.287,27.9 175.287,25.886 L175.287,7.291 L192.709,7.291 L192.709,53.846 Z M196.355,138.72 L100.453,138.72 L198.665,60.339 C198.738,60.281 198.771,60.196 198.838,60.133 C198.939,60.037 199.012,59.924 199.102,59.818 C199.332,59.548 199.539,59.277 199.679,58.961 C199.71,58.892 199.721,58.816 199.747,58.743 C199.89,58.359 199.978,57.97 199.985,57.562 C199.986,57.536 200,57.516 200,57.491 L200,3.646 C200,1.632 198.369,2.27373675e-13 196.355,2.27373675e-13 L3.646,2.27373675e-13 C1.631,2.27373675e-13 0,1.632 0,3.646 L0,57.491 C0,59.504 1.631,61.137 3.646,61.137 L99.718,61.137 L1.363,139.517 C1.306,139.563 1.281,139.631 1.227,139.68 C1.054,139.835 0.926,140.02 0.785,140.205 C0.633,140.406 0.478,140.596 0.372,140.82 C0.292,140.988 0.259,141.169 0.205,141.351 C0.121,141.634 0.046,141.908 0.032,142.202 C0.03,142.26 0,142.308 0,142.365 L0,196.21 C0,198.224 1.631,199.856 3.646,199.856 L196.355,199.856 C198.369,199.856 200,198.224 200,196.21 L200,142.365 C200,140.352 198.369,138.72 196.355,138.72 L196.355,138.72 Z"
              ></path>
            </svg>

            <h4 className="text-[14px] text-black font-semibold">
              Lựa chọn kích thước phù hợp{" "}
            </h4>
            <span className="text-[14px] text-black font-normal text-center">
              Hãy ghé thăm cửa hàng của chúng tôi để được đo, làm bài kiểm tra
              để tìm kích thước của bạn hoàn toàn trực tuyến hoặc thử đồ miễn
              phí tại nhà.
            </span>
          </div>

          <div className="w-[32%] px-[24px] flex flex-col gap-4 justify-start items-center border-r-[2px] ">
            <h4 className="text-[12px] text-[#666666] font-semibold">
              BƯỚC 4{" "}
            </h4>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 197.9 197.8"
              className="w-[60px] h-[60px]"
            >
              <circle cx="117.7" cy="168.7" r="6.2"></circle>
              <path d="M195.1,34.7l-29.2-9.8c-0.3-0.6-0.7-1.1-1.2-1.5L136.2,0.9c-0.3-0.2-0.6-0.4-0.9-0.5c0,0-0.1,0-0.1,0 c-0.4-0.2-0.9-0.2-1.3-0.3c-0.1,0-0.1,0-0.2,0H63.2C63.1,0,63,0,63,0c-0.4,0-0.9,0.1-1.3,0.3c0,0-0.1,0-0.2,0 c-0.3,0.1-0.6,0.3-0.9,0.5L32.1,23.4c-0.5,0.4-0.9,1-1.2,1.6L2.8,34.7C1.1,35.3,0,36.9,0,38.6v155.3c0,2.3,1.8,4.1,4.1,4.1h94 c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0,0.2-0.1h95.1c2.3,0,4.1-1.8,4.1-4.1V38.6C197.9,36.8,196.8,35.3,195.1,34.7z M142.2,40.3 l9,15.4l-42.9,63.3l27.7-107.6l19.2,15.1l-11.9,8.4C141.6,36,141.1,38.4,142.2,40.3z M60.7,11.3l27.7,107.6L45.6,55.6l9-15.4 c1.1-1.8,0.6-4.2-1.2-5.5l-11.9-8.4L60.7,11.3z M94.3,189.8h-86V41.5l27.1-9.4l10.2,7.2l-8.4,14.3c-0.8,1.4-0.8,3.1,0.1,4.4 l57,84.1V189.8z M98.4,124.4L68.5,8.3h59.9L98.4,124.4z M189.7,124.4h-32.7V113h32.7V124.4z M189.7,104.8h-36.9 c-2.3,0-4.1,1.8-4.1,4.1v19.6c0,2.3,1.8,4.1,4.1,4.1h36.9v57.1h-87.1v-47.6l57-84.1c0.9-1.3,1-3,0.1-4.4l-8.4-14.3l10.3-7.2 l28.1,9.5V104.8z"></path>
            </svg>

            <h4 className="text-[14px] text-black font-semibold">
              Hãy sẵn sàng đón nhận lời khen{" "}
            </h4>
            <span className="text-[14px] text-black font-normal text-center">
              Dịch vụ cho thuê sẽ đến trước sự kiện của bạn 10 ngày, có nhiều
              thời gian để thử bộ trang phục của bạn.
            </span>
          </div>
        </div>
      </div>

      <h1 className="px-[100px] mt-[64px] text-[25px] font-semibold">
        Quý khách vui lòng đọc kỹ những CHÍNH SÁCH THUÊ HÀNG CỦA CHÚNG TÔI
      </h1>

      <div
        className=" w-full py-[64px] px-[100px] leading-8 flex flex-row justify-between flex-wrap gap-y-16
       items-start text-[20px] text-[#2c2c2c] font-medium mb-[100px ]"
      >
        <div className="flex flex-col gap-3 w-[33%]">
          <h1 className=" mb-[20px] text-start">
            <i className="fa-solid fa-1"></i>. Dịch vụ Cho Thuê Áo Dài
          </h1>
          <p className="text-[17px] font-normal leading-6">
            Sắc Lụa Việt cam kết cung cấp dịch vụ cho thuê áo dài với chất lượng
            cao và trải nghiệm khách hàng tốt nhất.
          </p>
          <p className="text-[17px] font-normal leading-6">
            Để đảm bảo sự hài lòng của quý khách, Sắc Lụa Việt đã xây dựng một
            chính sách trả lại hàng rõ ràng và dễ hiểu.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-[32%]">
          <h1 className=" mb-[20px] text-start">
            <i className="fa-solid fa-2"></i>. Chính Sách Trả Hàng, Đặt Cọc
          </h1>
          <p className="text-[17px] font-normal leading-6">
            Ngoài tiền thuê, khách hàng cần đặt cọc 35% giá trị đơn hàng như một
            phí đảm bảo chất lượng áo dài sau khi thuê.
          </p>
          <p className="text-[17px] font-normal leading-6">
            Sau khi áo dài được trả lại và kiểm tra, nếu không có vấn đề nghiêm
            trọng, công ty sẽ hoàn trả tiền đặt cọc trong vòng 7 ngày làm việc
            qua phương thức thanh toán ban đầu.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-[34%] text-end">
          <h1 className=" mb-[20px] ">
            {" "}
            <i className="fa-solid fa-3"></i>. Thời Hạn và Điều Kiện Trả Hàng
          </h1>
          <p className="text-[17px] font-normal leading-6">
            Khi kết thúc hợp đồng thuê, khách hàng cần trả lại áo dài trong 3
            ngày. Phải đảm bảo áo vẫn sạch sẽ, không rách,bẩn nghiêm trọng.
          </p>
          <p className="text-[17px] font-normal leading-6">
            Phụ kiện đi kèm phải trả lại đầy đủ. Khách hàng cần xuất trình hợp
            đồng thuê khi trả .
          </p>
        </div>

        <div className="flex flex-col gap-3 w-[33%] text-start">
          <h1 className=" mb-[20px] ">
            <i className="fa-solid fa-4"></i>. Quy Trình Trả Hàng và Liên Hệ
          </h1>
          <p className="text-[17px] font-normal leading-6">
            Khi đến ngày kết thúc hợp đồng, Sắc Lụa Việt sẽ thông báo cho khách
            hàng.
            
       
          </p>
          <p className="text-[17px] font-normal leading-6">
            
            
             Khách hàng vui lòng liên hệ với công ty qua số điện thoại
            <span className="font-semibold"> (028.7777.2737) </span> hoặc email <span className="font-semibold">(sacluaviet@gmail.com) </span>
           để thông báo về việc trả lại hàng.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-[32%]">
          <h1 className=" mb-[20px] text-start">
            <i className="fa-solid fa-5"></i>. Chi Phí Phạt và Bồi Thường
          </h1>
          <p className="text-[17px] font-normal leading-6">
            Sau khi nhận được áo dài, nhân viên của Sắc Lụa Việt sẽ kiểm tra
            tình trạng áo ngay lập tức. 
          </p>
          <p className="text-[17px] font-normal leading-6">
            Nếu áo dài đáp ứng đầy đủ các điều kiện
            trả lại, chúng tôi sẽ xác nhận và hoàn tất quá trình trả lại.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-[34%] text-end">
          <h1 className=" mb-[20px] text-end">
            <i className="fa-solid fa-6"></i>. Kết Luận và Xác Nhận Trả Hàng
          </h1>

          <p className="text-[17px] font-normal leading-6">
            Tuy nhiên, nếu khách hàng trả trễ hơn thời hạn quy định, sẽ bị tính
            phí phạt tương đương 5% giá thuê mỗi ngày.
          </p>
          <p className="text-[17px] font-normal leading-6">
            Nếu áo dài bị hư hỏng hoặc mất mát, khách sẽ phải bồi thường chi phí
            sửa chữa hoặc thay thế theo giá của công ty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rental;
