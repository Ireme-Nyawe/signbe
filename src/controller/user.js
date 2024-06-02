import Jwt from "jsonwebtoken";
import users from "../models/user.js";

export const signUp = async (req, res) => {
  try {
    const data = req.body;
    const user = await users.create(data);
    if (user) {
      return res.status(201).json({
        success: true,
        user: user,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await users.findOne({ email: email, password: password });
    if (login) {
      const token = await Jwt.sign({id:login._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.EXPIRE_TIME,
      });
      return res.status(200).json({
        success: true,
        data: login,
        token: token,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User Not Found",
      });
    }
  } catch (e) {
    return res.status(400).json({
      success: false,
      error: e,
    });
  }
};
