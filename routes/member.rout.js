import express from "express";
import {
  getAllFacultyMembers,
  addFacultyMember,
  deleteFacultyMember,
} from "../controllers/member.controller.js";

const router = express.Router();

router.get("/", getAllFacultyMembers);

router.post("/", addFacultyMember);

router.delete("/:id", deleteFacultyMember);

export default router;
