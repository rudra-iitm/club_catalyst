import { User } from '../models/userModel.js';
import asyncHandler from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import jwt from 'jsonwebtoken'
import { Request } from '../models/requestModel.js';

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

const isAuthorizedUser = asyncHandler( async(req, res) => {
    try {
        const club = await Request.findById(req.params.requestId).club;
        const decodedData = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decodedData.id);

        if (club === req.user.club) {
            next()
        } else {
            res.json( new ApiError(500, "Not authorized to approve or recommend"))
        }
    } catch (err) {
        res.json({
            error: err
        });
    }
})

export { authorizeRoles, isAuthenticatedUser, isAuthorizedUser}