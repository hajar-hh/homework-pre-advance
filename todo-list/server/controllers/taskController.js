import Task from '../models/task.js'; 

const createTask = async (req, res) => {
  try {
    const { title, description, completed, important, deadline, dirId } = req.body;
    const newTask = new Task({ title, description, completed, important, deadline, dirId });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// =========
// =========
// =========
// =========
// =========

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// =========
// =========
// =========
// =========
// =========

const getTasksByDirectory = async (req, res) => {
  try {
    const tasks = await Task.find({ dirId: req.params.dirId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// =========
// =========
// =========
// =========
// =========

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// =========
// =========
// =========
// =========
// =========

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { createTask, getTasks, getTasksByDirectory, updateTask, deleteTask }; 
