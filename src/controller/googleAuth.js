import jwt from "jsonwebtoken";
import users from "../models/user.js";
const googleAuth = async (req, res) => {
  try {
    const logingUser = await users.findOne({
      email: req.user.email,
    });
    if (logingUser) {
      return res.redirect(
        `${process.env.FRONTEND_URL}/login?token=${generateToken(
          logingUser._id
        )}`
      );
    } else {
      const user = await users.create({
        email: req.user.email,
        password: "11111",
      });
      return res.redirect(
        `${process.env.FRONTEND_URL}/login/?token=${generateToken(user._id)}`
      );
    }
  } catch (error) {
    console.log(error);
  }
};


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
export default googleAuth;
