import express from "express";
import { getAllUsers, getUserById } from "../controllers/userController.js";
import verifyJWT from "../middleware/verifyJwt.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.get("/:id", getUserById);

export default userRouter;
    