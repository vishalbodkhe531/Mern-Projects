import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    descriptione: {
      type: String,
      required: true,
    },

    isPinTask: {
      type: Boolean,
      default: false,
      required: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Tasks = mongoose.model("Tasks", taskSchema);
