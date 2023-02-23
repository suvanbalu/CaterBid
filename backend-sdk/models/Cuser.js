import mongoose, {Schema,model} from "mongoose";

const schema = new Schema({
  comp_name :{
    type: String,
    required: true,
  },
  b_type :{
    type: String,
    required: true,
  },
  
})