import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  important: { type: Boolean, default: false },
  deadline: { type: Date },
  dirId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Directory",
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
