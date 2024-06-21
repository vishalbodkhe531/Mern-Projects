import { User } from "../models/user.model.js";
import { errorHandler } from "../utils/errorHandler.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const usercreate = async (req, res, next) => {
  const { name, userName, password, confirmPassword } = req.body;
  // console.log(name, userName, password, confirmPassword);
  try {
    const isExist = await User.findOne({ userName: userName });

    if (isExist) return next(errorHandler(400, "User already existed"));

    console.log(password.length);
    // const passLength = password.length
    if (password.length < 6)
      return next(errorHandler(400, "please enter minimum 6 charecter"));
    if (password != confirmPassword)
      return next(errorHandler(400, "Incorrect Password"));
    const hashPass = bcryptjs.hashSync(password, 10);

    await User.create({
      name,
      userName,
      confirmPassword,
      password: hashPass,
    });

    res
      .status(201)
      .json({ success: true, message: "User Successfully Created" });
  } catch (error) {
    console.log(`Error while create user : ${error}`);
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const isExist = await User.findOne({ email });

    if (!isExist) return next(errorHandler(400, "User Not Found !!"));

    const matchPass = bcryptjs.compareSync(password, isExist.password);

    if (!matchPass) return next(errorHandler(400, "Incorrect Password!!"));

    const token = jwt.sign({ _id: isExist._id }, process.env.SECREAT_KEY);
    res
      .cookie("cookie", token, {
        httpOnly: true,
        maxAge: 12 * 24 * 60 * 60 * 1000,
      })
      .status(202)
      .json({ success: true, message: "User Successfully Login" });
  } catch (error) {
    console.log(`Error while create user : ${error}`);
    next(error);
  }
};

export const userProfile = (req, res, next) => {
  try {
    const { user } = req;
    const { password, ...userData } = user._doc;
    res.status(200).json(userData);
  } catch (error) {
    next(error);
  }
};

export const userDelete = async (req, res, next) => {
  const { id } = req.params;

  const DeletedUser = await User.findByIdAndDelete(id);

  if (!DeletedUser) return next(errorHandler(400, "User not found"));

  res
    .clearCookie("cookie")
    .status(200)
    .json({ success: true, message: "User successfully deleted" });
};

export const logoutUser = (req, res, next) => {
  res
    .clearCookie("cookie")
    .status(200)
    .json({ success: true, message: "User successfully logout" });
};

export const updateuser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(400, "You can update only your profile"));
  }

  try {
    if (req.body.email) {
      const isExistEmail = await User.findOne({ email: req.user.email });
      if (!isExistEmail)
        return next(errorHandler(400, "Email already existed"));
    }

    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const newUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
      },
      { new: true }
    );

    const { password, ...userData } = newUser._doc;

    res.status(202).json(userData);
  } catch (error) {
    next(error);
  }
};
