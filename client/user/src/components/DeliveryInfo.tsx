import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axioisPrivate from "../api";
import { deliveryInfoType } from "../types";
import { inputDeliveryField } from "../constants";

const DeliveryInfo = ({
  deliveryInfo,
  setDeliveryInfo,
}: {
  deliveryInfo: deliveryInfoType;
  setDeliveryInfo: Dispatch<SetStateAction<deliveryInfoType>>;
}) => {
  const [provinces, setProvinces] = useState<{ id: number; name: string }[]>(
    []
  );
  const [districts, setDistricts] = useState<{ id: number; name: string }[]>(
    []
  );
  const [wards, setWards] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    if (deliveryInfo.district.id != 0) {
      axioisPrivate
        .get(`/location/ward/${deliveryInfo.district.id}`)
        .then((res) => {
          setWards(res.data.response);
        });
      return;
    }
    if (deliveryInfo.city.id != 0) {
      axioisPrivate
        .get(`/location/district/${deliveryInfo.city.id}`)
        .then((res) => {
          setDistricts(res.data.response);
        });
      return;
    }
    axioisPrivate.get(`/location/province`).then((res) => {
      setProvinces(res.data.response);
    });
  }, [deliveryInfo.city, deliveryInfo.district]);
  
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-[30px] font-bold font-serif">Thông tin vận chuyển</h1>

      <div className="flex flex-row items-center justify-between flex-wrap gap-6 ">
        {inputDeliveryField.map((filed) =>
          filed.tag === "select" ? (
            <select
              key={filed.name}
              name={filed.name}
              value={
                filed.name === "city" ||
                filed.name === "district" ||
                filed.name === "ward"
                  ? deliveryInfo[filed.name].id
                  : deliveryInfo[filed.name]
              }
              onChange={(e) => {
                setDeliveryInfo({
                  ...deliveryInfo,
                  district:
                    filed.name == "city"
                      ? { id: 0, name: "" }
                      : deliveryInfo.district,
                  ward:
                    filed.name == "city" || filed.name == "district"
                      ? { id: 0, name: "" }
                      : deliveryInfo.ward,
                  [filed.name]: {
                    id: parseInt(e.target.value),
                    name: e.target.options[e.target.selectedIndex].text,
                  },
                });
              }}
              className="w-[31%] px-[16px] py-[8px] rounded-2xl border 
            border-[#f1f1f1] focus:outline-none focus:text-black  focus:border-blue-700"
            >
              <option value="0">{filed.label}</option>

              {filed.name === "city" &&
                provinces.length &&
                provinces.map((province) => (
                  <option key={province.name} value={province.id}>
                    {province.name}
                  </option>
                ))}
              {filed.name === "district" &&
                districts.length &&
                districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              {filed.name === "ward" &&
                wards.length &&
                wards.map((ward) => (
                  <option key={ward.id} value={ward.id}>
                    {ward.name}
                  </option>
                ))}
            </select>
          ) : (
            <div
              key={filed.name}
              className={`flex flex-col min-w-[48%] w-[${filed.width}] text-[#000000B3]`}
            >
              <label className=" font-semibold">{filed.label}</label>
              <input
                type={filed.type}
                value={
                  filed.name !== "district" &&
                  filed.name !== "city" &&
                  filed.name !== "ward"
                    ? deliveryInfo[filed.name]
                    : ""
                }
                onChange={(e) =>
                  setDeliveryInfo({
                    ...deliveryInfo,
                    [filed.name]: e.target.value,
                  })
                }
                placeholder={filed.placeholder}
                className="w-full px-[16px] py-[8px] rounded-2xl border 
border-[#f1f1f1] focus:outline-none focus:text-black  focus:border-blue-700"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DeliveryInfo;
