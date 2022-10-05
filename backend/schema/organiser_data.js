const mongoose = require("mongoose");
const userData = new mongoose.Schema({
    event:{
        type: String,
        required:true
    },
    seats:{
        type: Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    staff:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Organiser_data",userData);