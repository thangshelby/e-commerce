import express from "express";
import {
  addProductToCart,
  getCartByUserId,
  deleteProductInCart,
  updateProductInCart,
} from "../controllers/cartController.js";
import verifyJWT from "../middleware/verifyJwt.js";

const cartRouter = express.Router();

cartRouter.get("/:id", getCartByUserId);
cartRouter.post("/add", addProductToCart);
cartRouter.put('/update', updateProductInCart); 
cartRouter.delete("/delete/:id", deleteProductInCart);

cartRouter.get;
export default cartRouter;
