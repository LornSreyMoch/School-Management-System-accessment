import express from "express";
const studentRouter = express.Router();
import { createStudent, getStudent, getAllStudent, updateStudent, deleteStudent } from "../controllers/studentController.js";

studentRouter.post("/create", createStudent);
studentRouter.get("/all", getStudent);
studentRouter.get("/all/:id", getAllStudent);
studentRouter.put("/update/:id", updateStudent);
studentRouter.delete("/delete/:id", deleteStudent);

export default studentRouter;
