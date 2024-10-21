const OrderSummary = ({
  totalPrice,
  deposit,
  handlePrice,
}: {
  totalPrice: number;
  deposit: number;
    handlePrice: (price: number) => string;
}) => {
  return (
    <div
      className="pt-[20px] border-t-[1px] border-[#ccc] text-[14px] text-[#23f30]
       flex flex-col  items-center gap-4 font-medium"
    >
      <div className="flex flex-row justify-between items-center w-full">
        <span>Tổng tiền hàng</span>
        <span>{handlePrice(totalPrice)}</span>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <span>Tổng tiền cọc</span>
        <span>{handlePrice(deposit)}</span>
      </div>

      <div className="flex flex-row justify-between items-center mt-[30px] w-full">
        <span>Giảm giá</span>
        <span>0 đ</span>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <span>Phí giao hàng</span>
        <span>Miễn Phí</span>
      </div>

      <div className="flex flex-row justify-between items-center w-full text-[16px] text-black border-y-[1px] py-[20px] border-[#ccc] ">
        <span>Tổng tiền phải chả</span>
        <span className="font-bold">{handlePrice(totalPrice+deposit)}đ</span>
      </div>
    </div>
  );
};

export default OrderSummary;
