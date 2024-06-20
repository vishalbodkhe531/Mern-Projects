import { Task } from "../models/task.modul.js";
import { errorHandler } from "../utils/errorHandler.js";

export const createTask = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (title === "") return;

    await Task.create({
      title,
      user: req.user,
    });

    res.status(201).json({ success: true, message: "Task Successfully Added" });
  } catch (error) {
    next(error);
  }
};

export const allTask = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const tasks = await Task.find({ user: userId });

    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

export const toogleTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    task.isComplited = !task.isComplited;

    await task.save();

    res.status(200).json({ success: true, message: "Task Updated" });
  } catch (error) {
    console.log(`Error while toogle Task : ${error}`);
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  const isExist = await Task.findById(req.params.id);
  try {
    if (!isExist) return next(errorHandler(400, "Incorrect ID"));

    await Task.findByIdAndDelete(isExist);

    Task.save();

    res
      .status(200)
      .json({ success: true, message: "Task Successfully Deleted" });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const isExist = await Task.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
      },
    });

    if (!isExist) return next(errorHandler(400, "Invalid ID"));

    res.status(200).json(isExist);
  } catch (error) {
    console.log(`error while update task `);
    next(error);
  }
};
