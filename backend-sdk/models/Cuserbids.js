import mongoose, {Schema,model} from "mongoose";

const schema = new Schema({
    c_username:{
        type: String,
        required: true,
    },
    post_id:{
        type: String,
        required: true,
    },
    bid_amount:{
        type:Number,
    },
    

})

export default model("Cuserbids",schema);