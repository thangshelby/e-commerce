import SSMSModel from "../database/model/MyModel.js";
import { getSocketIdFromUserId, io } from "../socket/index.js";

export const addProductToCart = async (req, res) => {
  try {
    const {
      userId,
      productId,
      quantity,
      size,
      status,
      startRentDate,
      endRentDate,
    } = req.body;
    const CartModel = new SSMSModel();

    const checkProductInCart = await CartModel.Read(
      "CART",
      "*",
      `WHERE USER_ID=${userId} AND PRODUCT_ID=${productId} AND STATUS='${status}' AND SIZE='${size}' AND START_DATE='${startRentDate}' AND END_DATE='${endRentDate}'`
    );

    const product = await CartModel.Read(
      "PRODUCT",
      "NAME,PRICE_RENT, PRICE_SALE,IMAGE",
      "WHERE ID=" + productId
    );

    const cart =
      checkProductInCart.length > 0
        ? await CartModel.Update(
            "CART",
            "QUANTITY",
            cart[0].QUANTITY + quantity,
            `WHERE USER_ID=${userId} AND PRODUCT_ID=${productId}`
          )
        : await CartModel.Create(
            "CART",
            `${productId},${userId}, ${quantity},'${size}','${status}', '${startRentDate}','${endRentDate}'`
          );

    const result = {
      id: cart.ID,
      productId: cart.PRODUCT_ID,
      name: product[0].NAME,
      priceSale: product[0].PRICE_SALE,
      priceRent: product[0].PRICE_RENT,
      quantity: cart.QUANTITY,
      size: cart.SIZE,
      image: product[0].IMAGE,
      status: cart.STATUS,
      startDate: cart.START_DATE,
      endDate: cart.END_DATE,
    };

    const socketId = getSocketIdFromUserId(userId);

    io.to(socketId).emit("newProductInCart", result);

    return res
      .status(200)
      .send({ message: "Add product to cart successfully" });
  } catch (error) {}
};

export const getCartByUserId = async (req, res) => {
  const userId = req.params.id;
  try {
    const CartModel = new SSMSModel();
    const cart = await CartModel.Read(
      "CART",
      "CA.ID AS ID, PD.ID AS PRODUCT_ID, PD.NAME,CA.SIZE ,PD.PRICE_RENT,PD.PRICE_SALE, CA.QUANTITY, PD.IMAGE,CA.STATUS,CA.START_DATE,CA.END_DATE",
      `AS CA JOIN PRODUCT AS PD ON PD.ID = CA.PRODUCT_ID WHERE CA.USER_ID=${userId}`
    );
    const response = [];
    for (let i = 0, len = cart.length; i < len; i++) {
      response.push({
        id: cart[i].ID,
        productId: cart[i].PRODUCT_ID,
        name: cart[i].NAME,
        priceSale: cart[i].PRICE_SALE,
        priceRent: cart[i].PRICE_RENT,
        quantity: cart[i].QUANTITY,
        size: cart[i].SIZE,
        image: cart[i].IMAGE,
        status: cart[i].STATUS,
        startDate: cart[i].START_DATE,
        endDate: cart[i].END_DATE,
      });
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProductInCart = async (req, res) => {
  const userId = req.body.userId;
  try {
    const cartId = req.params.id;
    const CartModel = new SSMSModel();
    await CartModel.Delete("CART", `WHERE ID=${cartId}`);
    const socketId = getSocketIdFromUserId(userId);
    io.to(socketId).emit("deleteProductInCart", cartId);
    return res.status(200).send({ message: "Delete product in cart success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProductInCart = async (req, res) => {
  try {
    const { cartId, userId, column, newValue } = req.body;
    const CartModel = new SSMSModel();
    const response=  await CartModel.Update(
      "CART",
      `${column.toUpperCase()}= ${newValue}`,
      `WHERE ID=${cartId}`
    );
    // const socketId = getSocketIdFromUserId(userId);
    // io.to(socketId).emit("updateProductInCart", response);
    return res.status(200).send({ message: "Update product quantity success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
