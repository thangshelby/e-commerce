const ReviewProduct = () => {
  const filters = [
    {
      title: "Đánh giá",
      children: [1, 2, 3, 4, 5],
    },
    {
      title: "Ảnh",
      children: ["Có ảnh", "Không ảnh"],
    },
    {
      title: "Phản hồi ",
      children: ["Đã phản hồi", "Không phản hồi"],
    },
  ];

  return (
    <div className="w-full flex flex-row  justify-evenly items-center">
      <div className="bg-[#f1f1f1]  w-[250px] h-[250px] col_center gap-4 rounded-lg">
        <h1 className="title">ĐÁNH GIÁ SẢN PHẨM</h1>

        <h2 className="text-[64px] font-[700] text-[#231f20]">5</h2>

        <div className="row_center gap-1">
          <i className="fa-solid fa-star text-yellow-500 fa-2xl"></i>
          <i className="fa-solid fa-star text-yellow-500 fa-2xl"></i>
          <i className="fa-solid fa-star text-yellow-500 fa-2xl"></i>
          <i className="fa-solid fa-star text-yellow-500 fa-2xl"></i>
          <i className="fa-solid fa-star text-yellow-500 fa-2xl"></i>
        </div>

        <div className="text-[14px] text-[#4d4d4d] font-thin mt-[10px]">
          {Math.round(Math.random() * (200 - 100) + 100)} đánh giá
        </div>
      </div>

      <div className="w-[725px] col_center gap-4">
        <div className="row_center w-full justify-evenly">
          {filters.map((filter) => (
            <div
              key={filter.title}
              className="w-[29.5%] h-[50px] py-[14px] pl-[14px] 
              pr-[28px] border-[1px] border-[#d9d9d9] rounded-[28px]"
            >
              <select className="w-full font-bold">
                <option className="w-full">{filter.title}</option>
                {filter.children?.map((child) => (
                  <option key={child}>{child} sao</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div
          className=" border-y-[1px] border-[#d9d9d9] py-[30px] 
        w-full text-[#231f20] gap-8 flex flex-col"
        >

          <div className=" w-full gap-3 flex flex-col">
            <div className="flex flex-row gap-1">
              <i className="fa-solid fa-star  fa-lg"></i>
              <i className="fa-solid fa-star  fa-lg"></i>
              <i className="fa-solid fa-star  fa-lg"></i>
              <i className="fa-solid fa-star  fa-lg"></i>
              <i className="fa-solid fa-star  fa-lg"></i>
            </div>

            <div className="text-[14px] font-bold">Thang Ngo</div>
            <div className="text-[14px] text-black font-normal">
              -Chất lượng sản phẩm khá tốt và đội ngũ chăm sóc khách hàng cũng
              rất nhiệt tình
            </div>
            <div
              className="text-[14px] text-black font-medium  opacity-50
          inline-block"
            >
              07.05.2024
            </div>
          </div>

          <div className=" w-full gap-3 flex flex-col">
            <div className="flex flex-row gap-1">
              <i className="fa-solid fa-star  fa-lg"></i>
              <i className="fa-solid fa-star  fa-lg"></i>
              <i className="fa-solid fa-star  fa-lg"></i>
              <i className="fa-solid fa-star  fa-lg"></i>
              <i className="fa-regular fa-star fa-lg"></i>
            </div>

            <div className="text-[14px] font-bold">Ngo Thang</div>
            <div className="text-[14px] text-black font-normal">
              -Giao hàng tuy hơi chậm nhưng đồ lại rất ok
            </div>
            <div
              className="text-[14px] text-black font-medium  opacity-50
          inline-block"
            >
              20.01.2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewProduct;
