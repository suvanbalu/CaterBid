import mongoose, {Schema,model} from "mongoose";

const schema = new Schema({
  c_username:{
    type: String,
    required: true,
    unique: true,
  },
  comp_name :{
    type: String,
    required: true,
  },
  b_type :{
    type: String,
    required: true,
  },
  c_email :{
    type: String,
    required: true,
  },
  c_password :{
    type: String,
    required: true,
  },
  c_phone :{
    type: String,
    required: true,
  },
  c_address :{
    type: String,
    required: true,
  },
  c_rating:{
    type: Number,
  },
  C_specials:{
      type: Array,
},
})

export default model("Cuser",schema);