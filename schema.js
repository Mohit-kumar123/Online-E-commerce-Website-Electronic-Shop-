import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  phonenumber: {
    type: String,
  },
  password: {
    type: String,
  },
});

export default userDetailSchema;
