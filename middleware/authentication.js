const user = require('../models/User');
const JWT = require('jsonwebtoken');
const {UnauthenticatedError} = require('../errors');
const authenticatedMiddleWare = async  (req , res  , next) => {
    const authHeader = req.headers.authorization;
    if( !authHeader|| !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('Authentication invalid')
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = JWT.verify(token , process.env.JWT_Secret);
        req.user = {userId:payload.userId , name : payload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Authentication invalid')
    }
}
module.exports = authenticatedMiddleWare