import { errorHandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const IsAuthenticated = async (req, res, next) => {
  try {
    const { cookie } = req.cookies;

    if (!cookie) return next(errorHandler(400, "You should login first"));

    const data = jwt.verify(cookie, process.env.SECREATE_KEY);

    req.user = await User.findById({ _id: data._id });
    next();
  } catch (error) {
    console.log(`Error while Authentication : ${error}`);
    next(error);
  }
};
