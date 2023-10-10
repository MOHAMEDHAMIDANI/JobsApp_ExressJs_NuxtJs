const mongoose = require('mongoose');
const JobsSchema = mongoose.Schema({
    company : {
        type : String , 
        required : [true , ' Please Provide company']
    },
    position : {
        type : String , 
        required : [true , ' Please Provide position']
    },
    status : {
        type : String , 
        default : 'pending',
        enum : ['interview','declined','pending']
    },
    createdBy : {
        type : mongoose.Types.ObjectId,
        ref : 'UserSchema',
        required : [true , 'Please Provide user']
    }
},{timestamps : true});
module.exports = mongoose.model("JobsSchema" , JobsSchema)