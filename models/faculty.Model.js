import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  exp: Number,
  type: String,
  qualification: String,
});

const Faculty = mongoose.model("Faculty", facultySchema);
export default Faculty;
