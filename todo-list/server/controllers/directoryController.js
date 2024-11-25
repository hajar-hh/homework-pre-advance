import Directory from '../models/directory.js';  

const createDirectory = async (req, res) => {
  try {
    const { name } = req.body;
    const newDirectory = new Directory({ name });
    await newDirectory.save();
    res.status(201).json(newDirectory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// =========
// =========
// =========
// =========
// =========

const getDirectories = async (req, res) => {
  try {
    const directories = await Directory.find();
    res.json(directories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// =========
// =========
// =========
// =========
// =========

const updateDirectory = async (req, res) => {
  try {
    const directory = await Directory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!directory) return res.status(404).json({ message: 'Directory not found' });
    res.json(directory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// =========
// =========
// =========
// =========
// =========

const deleteDirectory = async (req, res) => {
  try {
    const directory = await Directory.findByIdAndDelete(req.params.id);
    if (!directory) return res.status(404).json({ message: 'Directory not found' });
    res.json({ message: 'Directory deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { createDirectory, getDirectories, updateDirectory, deleteDirectory };
