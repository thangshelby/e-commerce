import authRouter from "./auth.js";
import productRouter from "./product.js";
import userRouter from "./user.js";
import categoryRouter from "./category.js";
import cartRouter from "./cart.js";
import messageRouter from "./message.js";
import locationRouter from "./location.js";
import orderRouter from "./order.js";

const route = (app) => {
  app.use("/auth", authRouter);
  app.use("/product", productRouter);
  app.use("/user", userRouter);
  app.use("/category", categoryRouter);
  app.use("/cart", cartRouter);
  app.use("/message", messageRouter);
  app.use('/location', locationRouter);
  app.use('/order', orderRouter);
};

export default route;
