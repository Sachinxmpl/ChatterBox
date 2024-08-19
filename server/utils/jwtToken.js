import jwt from "jsonwebtoken";

const cookieOptions = {
  expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  httpOnly: true,
  secure: true,
};

export const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });

  return res.status(code).cookie("useraccesstoken", token, cookieOptions).json({
    message: message,
    user,
  });
};
