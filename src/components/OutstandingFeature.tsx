import { outstandingFeatures,products } from "../constants";
import { useParams } from "react-router-dom";


const OutstandingFeature = () => {

  let params = useParams();

  const currentProducts = products.filter((product)=>{
    return product.titile == params.name
  });

  const currentProduct=currentProducts[0];
  return (
    <div className="flex flex-col w-[990px] rounded-xl
     bg-[#f1f1f1] px-[60px] py-[40px] justify-center items-center gap-4">
      <h1 className="text-[22px] font-bold">Đặc điểm nổi bật</h1>

      <div className="flex flex-row justify-between w-full px-[100px] py-[20px] border-b-[1px] border-[#ccc]">
        {outstandingFeatures.map((feature) => (
          <div key={feature.title} className="flex flex-col gap-2 items-center">
            <img src={feature.icon} className="w-[50px] h-[50px]" />
            <div className="text-[16px] font-bold">{feature.title}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 w-full mt-[40px ]">
        <h1 className="text-[16px] font-bold">
          Thông tin sản phẩm 
        </h1>
       {
          currentProduct.specialDetail?.map((detail)=>(
            <div key={detail} 
            className="text-[14px] text-[#231f30] w-[65%]">
              -{detail}
              </div>
          ))
       }
      </div>
    </div>
  );
};

export default OutstandingFeature;
