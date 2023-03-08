import mongoose, { Schema,model } from "mongoose"

const schema = new Schema({
  username: { 
    type: String,
    required: true,
    unique:true,
  },
  firstname:{
    type: String,
    required: true,
  },
  lastname:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

export default model("User", schema);