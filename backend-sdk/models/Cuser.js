import mongoose, {Schema,model} from "mongoose";

const schema = new Schema({
  c_username:{
    type: String,
    unique: true,
  },
  comp_name :{
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
  c_specials:{
      type: Array,
},
  c_insta:{
    type: String,
  },
  c_fb:{
    type: String,
  },
  c_maps:{
    type: String,
  }
})

export default model("Cuser",schema);