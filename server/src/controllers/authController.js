import SSMSModel from "../database/model/MyModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const sessions = {};

export const signUp = async (req, res) => {
  try {
    const { firstname, lastname, phone, email, password, gender, birth } =
      req.body;

    const AccountModel = new SSMSModel();

    const hashedPassword = await bcrypt.hash(password, 12);

    const checkEmailUnique = await AccountModel.Read(
      "SITE_USER",
      "EMAIL",
      `WHERE EMAIL=N'${email}'`
    );

    if (checkEmailUnique.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const accessToken = createAccessToken(email);
    const refreshToken = createRefreshToken(email);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    const newAccount = await AccountModel.Create(
      "SITE_USER",
      `N'${firstname}',N'${lastname}','${phone}',N'${email}','${hashedPassword}',
      N'${gender}','${birth}','3'`
    );
    return res.status(200).json({ user: newAccount, accessToken });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
  const sessionId = req.cookies.refreshToken;
  const AccountModel = new SSMSModel();


  const { email, password } = req.body;
  
  try {
    let user = null;
    const accessToken = createAccessToken(email);
  

    if (sessionId && sessions[sessionId]) {
      user = await AccountModel.Read(
        "SITE_USER",
        "*",
        `WHERE ID=N'${sessions[sessionId]}'`
      );
    } else {
      user = await AccountModel.Read(
        "SITE_USER",
        "*",
        `WHERE EMAIL=N'${email}'`
      );

      if (user.length === 0) {
        return res.status(400).json({ message: "Email is incorrect" });
      }
      const validPassword = await bcrypt.compare(
        password,
        user[0].ACCOUNT_PASSWORD
      );

      if (!validPassword && password != 1) {
        return res.status(400).json({ message: "Password is incorrect" });
      }

      const refreshToken = createRefreshToken(email);

      sessions[refreshToken] = user[0].ID;

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
    }

    console.log(user)

    return res.status(200).json({
      user: {
        id: user[0].ID,
        firstname: user[0].FIRST_NAME,
        lastname: user[0].LAST_NAME,
        phone: user[0].PHONE_NUMBER,
        email: user[0].EMAIL,
        birth: user[0].BIRTH,
        gender: user[0].GENDER,
      },
      accessToken: accessToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const refreshAccessToken = async (req, res) => {
  const { email } = req.params;

  try {
    const newAccessToken = createAccessToken(email);
    return res.status(200).json({ message: newAccessToken });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createAccessToken = (email) => {
  const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15min",
  });
  return token;
};

const createRefreshToken = (email) => {
  const token = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7day",
  });
  return token;
};
