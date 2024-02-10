import { User } from '../models/userModel.js';
import asyncHandler from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import jwt from 'jsonwebtoken'

const isAuthenticatedUser = asyncHandler( async(req, res, next) => {
    const { token } = req.cookies;

    if(!token){
        return next(new ApiError(401))
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next();
});

const authorizeRoles = (...roles) => {
    return (req, res, next)=>{
        if(!roles.includes(req.user.role)){
            return next (
                new ApiError(
                    403,
                    `Role: ${req.user.role} is not allowed to request or pass this.`
                )
            );
        }

        next();
    };
};

export { authorizeRoles, isAuthenticatedUser, }