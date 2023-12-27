const mongoose = require("mongoose");

const SurveyformSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    Phone:Number,
    Gender:String,
    Nationality:String,
    Address:String,
    Message:String

})

const SurveyformModel = mongoose.model("surveyform",SurveyformSchema);
module.exports= SurveyformModel;