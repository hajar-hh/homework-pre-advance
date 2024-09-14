import Faculty from "../models/faculty.Model.js";

// getAllFacultyMembers
export const getAllFacultyMembers = async (req, res) => {
  try {
    const faculties = await Faculty.find();
    console.log(faculties);
    res.status(200).send(faculties);
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

// addFacultyMember
export const addFacultyMember = async (req, res) => {
  try {
    const faculty = await Faculty.create(req.body);
    res.status(201).send({ data: faculty });
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

// deleteFacultyMember
export const deleteFacultyMember = async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndDelete(req.params.id);
    if (!faculty) {
      return res.status(404).send({ message: "Faculty not found" });
    }
    res.status(200).send({ message: "Faculty deleted successfully" });
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};
