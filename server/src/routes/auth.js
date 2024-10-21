import express from "express";
import {
  signIn,
  signUp,
  refreshAccessToken
} from "../controllers/authController.js";
import {verifyRefreshToken} from "../middleware/verifyJwt.js";
import { sendEmailCode } from "../middleware/sendAut.js";

const authRouter = express.Router();

authRouter.post("/user/sign-in",signIn);
authRouter.post("/user/sign-up", signUp);
authRouter.get('/user/refresh-token/:email' ,refreshAccessToken);

export default authRouter;
