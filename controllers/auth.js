const UserSchema = require('../models/User')
const { StatusCodes }= require('http-status-codes');
const {BadRequestError} = require('../errors/index')
const JWT = require('jsonwebtoken');

const Register = async (req,res) => {
    const user = await UserSchema.create({...req.body})
    const token = JWT.sign({userId:user._id , name:user.name} , "Secret" , {
        expiresIn:'30d',
    })
        res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const LoginUser = async (req,res) => {
    res.send('LoginUser');
}

module.exports = {
    Register , 
    LoginUser
}