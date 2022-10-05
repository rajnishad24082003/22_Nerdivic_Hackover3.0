const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const userData = new mongoose.Schema({
    googleid:{
        type: String,
        required:true
    },
    displayname:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    googleEmail:{
        type:String,
        required:true
    },
    userimage:{
        type:String
    },
    admin: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Organiser",userData);