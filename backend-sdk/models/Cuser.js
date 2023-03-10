import mongoose, {Schema,model} from "mongoose";

const schema = new Schema({
  c_username:{
    type: String,
    unique: true,
  },
  comp_name :{
    type: String,
  },
  b_type :{
    type: String,
  },
  c_email :{
    type: String,
  },
  c_password :{
    type: String,
  },
  c_phone :{
    type: String,
  },
  c_address :{
    type: String,
  },
  c_rating:{
    type: Number,
  },
  C_specials:{
      type: Array,
},
})

export default model("Cuser",schema);