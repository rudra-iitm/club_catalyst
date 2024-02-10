const User = require('../models/userModel');
const asyncHandler = require('../utils/asyncHandler');
const apiError = require('../utils/ApiError');
const jwt = require('jsonwebtoken');

exports.isAuthenticatedUser = asyncHandler(async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new apiError(401))
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next();
});

exports.authorizeRoles = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next (
                new apiError(
                    403,
                    `Role: ${req.user.role} is not allowed to request or pass this.`
                )
            );
        }

        next();
    };
};