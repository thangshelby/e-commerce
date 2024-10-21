
const CreateOrder = ({
  currentPaymentMethod,
  total,
  handleCreateOrder,
}: {
  currentPaymentMethod: {
    icon: string;
    title: string;
    description: string;
  };
  total: number;
  handleCreateOrder: () => void;
}) => {
  
  const handleTotalPrice = (total: Number) => {
    let res = String(total);
    let newRes = "";
    const len = res.length;
    for (let i = 0; i < len; i++) {
      newRes += res[i] + ((len - i - 1) % 3 == 0 ? "." : "");
    }
    return newRes.slice(0, newRes.length - 1);
  };

  return (
    <div
      className="fixed left-0 bottom-[0] z-30
  text-[16px] text-title font-medium w-full h-[95px] flex flex-row"
    >
      <div className="w-[50%] px-[10px]  h-full bg-[#eaeefa] row_center gap-3">
        <div className="w-[50%] flex flex-row justify-center  items-center gap-4  border-r-[1px] border-[#ccc]">
          <img src={currentPaymentMethod.icon} className="w-[35px] h-[30px]" />
          <div className="flex flex-col ">
            {currentPaymentMethod.title}
            <span>
              {currentPaymentMethod.description &&
                currentPaymentMethod.description}
            </span>
          </div>
        </div>

        <div className="w-[50%] flex flex-row text-[#2f5acf] font-bold">
          Chưa dùng mã giảm giá
        </div>
      </div>

      <div className="w-[50%] h-full bg-white text-black row_center gap-3">
        <div
          className="w-[50%] flex flex-col justify-evenly
      items-end   text-[14px] text-title"
        >
          <div className="row_center gap-1">
            Thành tiền
            <div className="text-[20px] font-bold text-[#2f5acf]">
              {handleTotalPrice(total)}đ
            </div>
          </div>

          <div className="opacity-80 text-end">
            Đăng nhập để tiết kiệm hơn 200.000đ{" "}
          </div>
        </div>

        <div
        onClick={()=>{
          alert("Đặt hàng thành công")
          handleCreateOrder()
        }}
          className="bg-black text-white 
      font-semibold text-[16px] px-[20px] py-[16px] w-[190px] row_center  rounded-[30px] hover:cursor-pointer"
        >
          Đặt hàng

        </div >
      </div>
    </div>
  );
};

export default CreateOrder;
