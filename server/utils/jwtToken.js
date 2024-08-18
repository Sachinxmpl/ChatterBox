export const sendToken = (res, user, code, message) => {
  const token = "adflsdasg";
  return res
    .status(code)
    .cookie("chattertoek", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
      sameSite: "none",
      secure: process.env.NODE_ENV === "production",
    })
    .json({
      success: true,
      message: message,
      token: token,
      user,
    });
};
