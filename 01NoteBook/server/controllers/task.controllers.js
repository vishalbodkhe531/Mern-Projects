import mongoose from "mongoose";
import { Tasks } from "../model/task.model.js";
import { errorHandler } from "../utils/errorHandler.js";

export const createTask = async (req, res, next) => {
  try {
    const { title, descriptione } = req.body;

    if (title === "" && descriptione === "")
      return next(400, "Please Enter Some Task");

    await Tasks.create({ title, descriptione, user: req.user });

    res.status(201).json({ success: true, message: "Task added successfully" });
  } catch (error) {
    next(error);
  }
};

export const allTasks = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const allTask = await Tasks.find({ user: userId });

    // if (allTask.isPinTask) {
    //   console.log(`first`);
    // }
    // console.log(allTask);

    // allTask.forEach((element) => {
    //   if (element.isPinTask) {
    //     allTask.unshift(element);
    //   }
    // });

    res.status(202).json(allTask);
  } catch (error) {
    console.log(`error while display all tasks : ${error}`);
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Tasks.findByIdAndDelete(req.params.id);

    if (!task) return next(errorHandler(400, "Invalide Id"));

    res.status(200).json({ message: "Task successfully deleted" });
  } catch (error) {
    next(error);
  }
};

export const toggleTask = async (req, res, next) => {
  try {
    const task = await Tasks.findById(req.params.id);

    if (!task) return next(errorHandler(400, "Invalide Id"));

    task.isComplited = !task.isComplited;

    await task.save();

    res
      .status(200)
      .json({ message: `Task successfully toogled : ${task.isComplited}` });
  } catch (error) {
    next(error);
  }
};

export const pinTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const pinTask = await Tasks.findById({ _id: id });

    pinTask.isPinTask = !pinTask.isPinTask;
    pinTask.save();

    res.status(202).json({
      success: true,
      message: `Task successfully PIN ${pinTask.isPinTask}`,
    });
  } catch (error) {
    console.log(`error while PIN task : ${error}`);
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { title, descriptione } = req.body;

  try {
    const isExistTask = await Tasks.findById({ _id: id });

    if (!isExistTask) return next(errorHandler(400, "Invalid ID"));

    const newTask = await Tasks.findByIdAndUpdate(
      id,
      {
        $set: {
          title: title,
          descriptione: descriptione,
        },
      },
      { new: true }
    );

    await newTask.save();

    res.status(201).json(newTask._doc);
  } catch (error) {
    console.log(`Error while updateTask : ${error}`);
    next(error);
  }
};

export const selectedTaskDelete = async (req, res, next) => {
  try {
    const selectedCardArr = req.body;

    if (selectedCardArr.length === 0)
      return next(errorHandler(400, "You should select-task"));

    const findIds = selectedCardArr.map(
      (id) => new mongoose.Types.ObjectId(id)
    );
    await Tasks.deleteMany({ _id: { $in: findIds } });

    res.status(202).json("Task successfully deleted");
  } catch (error) {
    next(error);
  }
};

// export const selectesTaskSendRecycle = async (req, res, next) => {
//   const selectedCardArr = req.body;

//   try {
//     if (selectedCardArr.length === 0)
//       return next(errorHandler(400, "You should select-task"));

//     selectedCardArr.map((item) =>
//       console.log(item.isComplited).populate("Tasks")
//     );
//     await Tasks.updateMany({ $set: { findIds } });
//     Tasks.save();
//     const updateTask = await Tasks.updateMany({});
//     res.status(202).json("Task successfully send to recycle bin");
//   } catch (error) {
//     next(error);
//   }
// };

export const searchInput = async (req, res, next) => {
  const { title } = req.query;
  const { id } = req.user;

  if (!id) return next(errorHandler(400, "Invalid ID"));

  const resultTasks = await Tasks.find({
    $and: [
      {
        user: id,
      },
      { title: { $regex: title, $options: "i" } },
    ],
  });

  res.status(200).json(resultTasks);
};

export const recycleBin = async (req, res, next) => {
  const id = req.params.id;

  try {
    const isExist = await Tasks.findById({ _id: id });

    if (!isExist) return next(errorHandler(400, "Invalid ID"));

    isExist.isDeleted = !isExist.isDeleted;

    isExist.save();

    res.status(202).json({
      success: true,
      message: `Task successfully Switch ${isExist.isDeleted}`,
    });
  } catch (error) {
    next(error);
  }
};
