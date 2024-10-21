import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { response } from "express";

dotenv.config();

const verifyJWT = (req, res, next) => {
  next()


  const token = req.headers.accesstoken;

  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "AccessToken expired", err: err });
      }
      next();
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export const verifyRefreshToken = async (req, res, next) => {
  await next()
  
  
  const token = req.cookies.refreshToken;
  console.log('refresh token',token)

  if (token) {
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(402).json({message: "RefreshToken expired", err: err });
      }
      next();
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

export default verifyJWT;
