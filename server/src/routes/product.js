import { Router } from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";
import verifyJWT from "../middleware/verifyJwt.js";

const productRouter = Router();

productRouter.get("/", getProducts)
productRouter.get("/:id",  getProductById);
productRouter.post("/add-product", createProduct);
productRouter.post("/update-product/:id", updateProduct);


export default productRouter;
