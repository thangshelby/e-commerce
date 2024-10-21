import transporter from "../nodemailer/index.js";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config()

export const sendEmailCode = async (req, res, next) => {
  const { email } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000);

  try {
    // const info = await transporter.sendMail({
    //   from: { name: "Thang Ngo", address: process.env.EMAIL }, // sender address
    //   to: { name: "thang", address: "n.nducthangg@gmail.com" }, // list of receivers
    //   subject: "Verify    Log In", // Subject line
    //   text: "Your verify code is", // plain text body
    //   html: `<b>Your verify code is ${code}</b>`, // html body
    // });
    req.code = code;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
