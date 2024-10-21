import express from "express";
const locationRouter = express.Router();

locationRouter.get("/province", async (req, res) => {
  try {
    const api = await fetch(
      "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
      {
        headers: {
          "Content-Type": "application/json",
          Token: "847be78e-5142-11ef-9d4e-1acf37c8614b",
        },
      }
    );
    return api.json().then((data) => {
      let response = [];
      for (let i = 0; i < data.data.length; i++) {
        response.push({
          id: data.data[i].ProvinceID,
          name: data.data[i].ProvinceName,
        });
      }

      return res.status(200).json({ response });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

locationRouter.get("/district/:provinceId", async (req, res) => {
  const provinceId = req.params.provinceId;
  try {
    const api = await fetch(
      "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
      {
        headers: {
          "Content-Type": "application/json",
          Token: "847be78e-5142-11ef-9d4e-1acf37c8614b",
        },
      }
    );
    return api.json().then((data) => {
      let response = [];
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].ProvinceID == provinceId) {
        response.push({
          id: data.data[i].DistrictID,
          name: data.data[i].DistrictName,
        });
        }
      }

      return res.status(200).json({ response });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

locationRouter.get("/ward/:districtId", async (req, res) => {
  const districtId = req.params.districtId;
  try {
    const api = await fetch(
      `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${districtId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Token: "847be78e-5142-11ef-9d4e-1acf37c8614b",
        },
      }
    );
    return api.json().then((data) => {
      let response = [];
      for (let i = 0; i < data.data.length; i++) {
        response.push({
          id: data.data[i].WardCode,
          name: data.data[i].WardName,
        });
      }

      return res.status(200).json({ response });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default locationRouter;
