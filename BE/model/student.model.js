import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  dayOfBirth: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  major: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
