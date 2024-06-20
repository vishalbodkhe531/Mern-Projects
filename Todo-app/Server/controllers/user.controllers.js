import { User } from "../models/user.model.js";
import { errorHandler } from "../utils/errorHandler.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const userCreate = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const isExisted = await User.findOne({ email });

    if (isExisted) return next(errorHandler(400, "User aleady existed"));

    const hashPass = bcryptjs.hashSync(password, 10);

    await User.create({ name, email, password: hashPass });

    res
      .status(201)
      .json({ success: true, message: "User successfully created" });
  } catch (error) {
    console.log(`Error while create User : ${error}`);
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    const isExisted = await User.findOne({ email });

    if (!isExisted) return next(errorHandler(400, "User not found"));

    const matchPass = bcryptjs.compareSync(
      req.body.password,
      isExisted.password
    );

    if (!matchPass) return next(errorHandler(400, "Incorrect Password"));

    const token = jwt.sign({ _id: isExisted._id }, process.env.SECREATE_KEY);

    const { password, ...userdata } = isExisted._doc;

    res
      .cookie("cookie", token, {
        httpOnly: true,
        maxAge: 12 * 24 * 60 * 60 * 1000,
      })
      .status(202)
      .json(userdata);
  } catch (error) {
    next(error);
  }
};

export const userProfile = async (req, res, next) => {
  try {
    const { user } = req;
    const { password, ...userData } = user._doc;
    res.status(200).json({ userData });
  } catch (error) {
    next(error);
  }
};

export const logoutUser = async (req, res, next) => {
  try {
    res
      .clearCookie("cookie")
      .status(200)
      .json({ message: "User successfully logout" });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  console.log(req.body);
  if (req.user.id !== req.params.id)
    return next(errorHandler(400, "You can update only your progile"));

  try {
    if (req.body.email) {
      const isExistUser = await User.findOne({ email: req.body.email });

      if (isExistUser) return next(errorHandler(400, "User already existed"));
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

    res.status(201).json({ userData });
  } catch (error) {
    console.log(`error while update user : ${error}`);
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res
      .clearCookie("cookie")
      .status(200)
      .json({ success: true, message: "User successfully deleted" });
  } catch (error) {
    next(error);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const { name, email, profilePic } = req.body;

    const isExisted = await User.findOne({ email });

    if (isExisted) {
      const token = jwt.sign({ _id: isExisted._id }, process.env.SECREATE_KEY);

      const { password, ...userData } = isExisted._doc;

      res
        .cookie("cookie", token, {
          httpOnly: true,
          maxAge: 12 * 24 * 60 * 60 * 1000,
        })
        .status(200)
        .json(userData);
      return;
    }

    const password = Math.floor(Math.random() * 10000000 + 10000000).toString();

    const hashPass = bcryptjs.hashSync(password, 10);

    // await User.create({ name, email, password: hashPass, userPic });
    const newUser = new User({ name, email, password: hashPass, profilePic });

    await newUser.save();

    const { password: xyz, ...userData } = newUser._doc;

    const token = jwt.sign({ _id: newUser._id }, process.env.SECREATE_KEY);
    res
      .cookie("cookie", token, {
        httpOnly: true,
        maxAge: 12 * 24 * 60 * 60 * 1000,
      })
      .status(201)
      .json(userData);
  } catch (error) {
    console.log(`error while google Auth : ${error}`);
    next(error);
  }
};
