//load the module
let mongoose = require("mongoose");

mongoose.pluralize(null)//to avoid creating in lower case with s postfix.
//create the schema 
let courseSchema = mongoose.Schema({
    _id:Number,
    coursename:String,
    courseDescript: String,
    amount:Number
});

let productModel = mongoose.model("CoursesDetailsInfo",courseSchema);
module.exports = productModel;