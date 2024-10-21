import express from "express";
import {
  createOrder,
  createShippingAddress,
  createPaymentMethod,
  createOrderLine,
  getAllOrders,
  getOrderDetail
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/", getAllOrders);
orderRouter.get('/order-detail/:id',getOrderDetail)

orderRouter.post(
  "/create-order",
  createShippingAddress,
  createPaymentMethod,
  createOrder,
  createOrderLine
);

export default orderRouter;
