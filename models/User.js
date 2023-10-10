const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const UserSchema = mongoose.Schema({
    name : {
        type : String , 
        required : [true , 'Please Provide a Name'],
        minlength: 3 , 
        maxlength: 50 , 
    },
    email : {
        type : String , 
        required : [true , 'Please Provide an Email'],
        match : [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ , 'Please Provide valid Email'],
        unique : true ,
    },
    password : {
        type : String , 
        required : [true , 'Please Provide a Password'],
        minlength: 6,
    },
})

UserSchema.pre('save' , async function(next){
    const salt =await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt)
    next()
})

UserSchema.methods.getToken = function(){
    return JWT.sign({userId:this._id , name:this.name} , process.env.JWT_Secret , {
        expiresIn:process.env.JWT_LifeTime,
    })
}
UserSchema.methods.comparePass = async function(Password){
    const isMatch = await bcrypt.compare(Password , this.password);
    return isMatch
}
module.exports = mongoose.model("UserSchema" ,UserSchema )
