import mongoose, { model, Schema } from "mongoose";

const Userschema = new Schema({
    username : {type : String , required : true},
    email : {type : String , required : true},
    profilepic : {type : String},
    coverpic : {type : String}
})


export default mongoose.models.User || model("User",Userschema);