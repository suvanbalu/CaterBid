import mongoose, { Schema,model } from "mongoose"

const schema = new Schema({
  username: { 
    type: String,
    required: true,
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
  }
});

export default model("User", schema);