import SSMSModel from "../database/model/MyModel.js";

export const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const ProductModel = new SSMSModel();
    const products = await ProductModel.Read(
      "PRODUCT",
      "PD.ID AS ID, CG.NAME AS CATEGORY_NAME, PD.NAME AS NAME, PD.PRICE_SALE ,PD.PRICE_RENT,P_DE.STOCK AS STOCK,P_DE.DESCRIPTION, PD.IMAGE, P_DE.IMAGES AS IMAGE_DETAIL",
      `AS PD JOIN CATEGORY AS CG ON CG.ID = PD.CATEGORY_ID  JOIN PRODUCT_DETAIL P_DE ON PD.PRODUCT_DETAIL_ID = P_DE.ID WHERE PD.ID=${productId}`
    );

    const response = {
      id: products[0].ID,
      name: products[0].NAME,
      category: products[0].CATEGORY_NAME,
      priceSale: products[0].PRICE_SALE,
      priceRent: products[0].PRICE_RENT,
      stock: products[0].STOCK,
      description: products[0].DESCRIPTION,
      image: products[0].IMAGE,
      imageDetail: products[0].IMAGE_DETAIL.split(","),
    };
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const ProductModel = new SSMSModel();
    const products = await ProductModel.Read(
      "PRODUCT",
      "PD.ID AS ID, CG.NAME AS CATEGORY_NAME, PD.NAME AS NAME, PD.PRICE_SALE ,PD.PRICE_RENT, PD.IMAGE,P_DE.IMAGES AS IMAGE_DETAIL,P_DE.STOCK AS STOCK",
      "AS PD JOIN CATEGORY AS CG ON CG.ID = PD.CATEGORY_ID  JOIN PRODUCT_DETAIL P_DE ON PD.PRODUCT_DETAIL_ID = P_DE.ID"
    );

    const response = [];
    for (let i = 0, len = products.length; i < len; i++) {
      response.push({
        id: products[i].ID,
        name: products[i].NAME,
        category: products[i].CATEGORY_NAME,
        priceSale: products[i].PRICE_SALE,
        priceRent: products[i].PRICE_RENT,
        stock: products[i].STOCK,
        image: products[i].IMAGE,
        imageDetail: products[i].IMAGE_DETAIL.split(","),
      });
    }
    res.status(200).send(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      priceSale,
      priceRent,
      stock,
      imageCover,
      image1,
      image2,
      image3,
      image4,
      description,
    } = req.body;

    const ProductModel = new SSMSModel();

    const images = `${image1},${image2},${image3},${image4}`;

    const productDetail = await ProductModel.Create(
      "PRODUCT_DETAIL",
      `${Number(stock)}
      ,N'${description}',N'${images}' `
    );

    const productDetailId = productDetail.ID;

    const checkCategory = await ProductModel.Read(
      "CATEGORY",
      "ID",
      `WHERE NAME=N'${category.toUpperCase()}'`
    );
    let categoryId = null;
    if (checkCategory.length === 0) {
      categoryId = await ProductModel.Create(
        "CATEGORY",
        `NULL,N'${category.toUpperCase()}'`
      ).ID;
    } else {
      categoryId = checkCategory[0].ID;
    }
    await ProductModel.Create(
      "PRODUCT",
      ` ${categoryId},${productDetailId},
       N'${name}', ${Number(priceSale)},N'${Number(
        priceRent
      )}',N'${imageCover}'`
    );
    return res.status(200).json({ message: "Product created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const {
      name,
      category,
      priceSale,
      priceRent,
      stock,
      imageCover,
      image1,
      image2,
      image3,
      image4,
      description,
    } = req.body;

    console.log(req.body);

    const ProductModel = new SSMSModel();

    const images = `${image1},${image2},${image3},${image4}`;

    const productDetail = await ProductModel.Create(
      "PRODUCT_DETAIL",
      `${Number(stock)}
      ,N'${description}',N'${images}' `
    );

    const productDetailId = productDetail.ID;

    const checkCategory = await ProductModel.Read(
      "CATEGORY",
      "ID",
      `WHERE NAME=N'${category.toUpperCase()}'`
    );
    let categoryId = null;
    if (checkCategory.length === 0) {
      categoryId = await ProductModel.Create(
        "CATEGORY",
        `NULL,N'${category.toUpperCase()}'`
      ).ID;
    } else {
      categoryId = checkCategory[0].ID;
    }
    await ProductModel.Update(
      "PRODUCT",
      `CATEGORY_ID=${categoryId},PRODUCT_DETAIL_ID=${productDetailId},
       NAME=N'${name}', PRICE_SALE=${Number(priceSale)},PRICE_RENT=${Number(
        priceRent
      )},IMAGE=N'${imageCover}'`,
      `WHERE ID=${id}`
    );
    return res.status(200).json({ message: "Product updated" });

  }catch (error) {
    res.status(500).json({ message: error.message });
  }
}