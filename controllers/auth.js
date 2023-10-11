const UserSchema = require('../models/User')
const { StatusCodes }= require('http-status-codes');
const {BadRequestError , UnauthenticatedError} = require('../errors/index');
const JWT = require('jsonwebtoken');

const Register = async (req,res) => {
    const user = await UserSchema.create({...req.body})
    const token = user.getToken()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const LoginUser = async (req,res) => {
    const {email , password} = req.body;

    if(!email || !password){
        throw new BadRequestError('Please Provide an Email and Password')
    }
    const user = await UserSchema.findOne({email})
    if(!user){
        throw new UnauthenticatedError('Invalid Email')
    }
    const checkPass = await user.comparePass(password);
    if(!checkPass){
        throw new UnauthenticatedError('Invalid Password')
    }
    const token = user.getToken();
    res.status(StatusCodes.OK).json({user:{name : user.name} , token})
}

module.exports = {
    Register , 
    LoginUser
}