import asyncHandler from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js";

import { ApiError } from "../utils/ApiError.js";
import { sendToken } from '../utils/jwtToken.js'
const User = require("../models/userModel");
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto");

//Register a user
const registerUser = asyncHandler( async(req,res)=>{
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilepicurl",
        },
    });

    sendToken(user,201,res);
});


//Login User

const loginUser = asyncHandler(  async (req,res) => {
    const {username, password} = req.body;

    //checking if user has given password and email both

    if(!username || !password){
        return new ApiError(400, "Please Enter Email & Password");
    }

    const user = await User.findOne({
        username
    }).select("+password");

    if(!user){
        return new ApiError(401, "Invalid email or password");
    }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched){
        return ApiError(401, "Invalid email or password");
    }

    sendToken(user,200,res);
});

//Logout User

const logout = asyncHandler( async(req,res) => {
    
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    });
    
    res.status(200).json({
        success:true,
        message:"loggedout"
    })
})

//forgot password

const forgotPassword = asyncHandler( async(req,res,next) => {
    const user = await User.findOne({
        username:req.body.username
    });

    if(!user){
        return ApiError(404, "User not found");
    }

    //Get ResetPassword Token
    const resetToken = user.getResetPasswordToken();

    await user.save({
        validateBeforeSave:false
    });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it`;

    try {
        await sendEmail({
            email:user.email,
            subject:`Ecommerce Password Recovery`,
            message,
        });

        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successfully`
        });

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({validateBeforeSave:false});

        return next(new ErrorHandler(error.message,500));
    }
});

//Reset password

const resetPassword = asyncHandler( async(req,res) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const user = User.findOne({resetPasswordToken,resetPasswordExpire:{$gt:Date.now()}});

    if(!user){
        return new ApiError(400, "Reset Password Token is invalid or has been expired");
    }

    if(req.body.password!==req.body.confirmPassword){
        return ApiError(400, "Password does not match");
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user,200,res);
    
});


//Get User Detail

const getUserDetails = asyncHandler( async(req,res) => {

    const user = await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user,
    });
});

//Update User password

const updatePassword = asyncHandler( async(req,res) => {

    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = user.comparePassword(req.body.oldPassword);

    if(!isPasswordMatched){
        return ApiError(400, "Old password is incorrect");
    }

    if(req.body.newPassword !== req.body.confirmPassword){
        return ApiError(400, "Password does not match");
    }

    user.password = req.body.newPassword;
    await user.save();

    sendToken(user,200,res);
});

//Update User Profile

const updateProfile = asyncHandler(async(req,res,next)=>{

    const newUserData ={
        name :req.body.name,
        email:req.body.email,

    }

    const user = await User.findByIdAndUpdate(req.user.id,newUserData,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    })

    res.status(200).json({
        success:true,
    });
});

//Get all users(admin)

const getAllUser = asyncHandler( async(req,res) => {
    const users = await User.find();

    res.status(200).json({
        success:true,
        users,
    });

});

const getSingleUser = asyncHandler( async(req,res) => {
    const user = await User.findById(req.params.id);

    if(!user){
        return new ApiError(400, `User does not exist with ID : ${req.params.id}`);
    };
    
    res.status(200).json({
        success:true,
        user,
    });

});

//Update User Role

const updateRole = asyncHandler(async(req,res) => {

    const newUserData ={
        name :req.body.name,
        email:req.body.email,
        role:req.body.role,
    }

    const user = await User.findByIdAndUpdate(req.params.id,newUserData,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    })

    res.status(200).json({
        success:true,
    });
});

//Delete User Data --Admin

const deleteUser = asyncHandler(async(req,res,next)=>{

    const user = await User.findById(req.params.id);

    if(!user){
        return ApiError(400, `User Doesn't exist with id ${req.params.id}`);
    }

    await user.deleteOne();

    res.status(200).json({
        success:true,
    });
});