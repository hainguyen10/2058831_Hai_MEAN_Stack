//load the module
let mongoose = require("mongoose");

mongoose.pluralize(null)//to avoid creating in lower case with s postfix.
//create the schema 
let chatSchema = mongoose.Schema({
    _id:Number,
    nameUser:String,
    userMessDescript: String,
});

let chatModel = mongoose.model("ChatLogDetails",chatSchema);
module.exports = chatModel;