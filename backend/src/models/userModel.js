import mongoose from 'mongoose';
import validator from 'validator';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required:[true,"Please enter your name"]
    },
    username:{
        type: String,
        required:[true,"Please enter your username"],
        unique:true,
    },
    email: {
        type: String,
        required:[true,"Please enter your email"],
        unique: true,
        validator:[validator.isEmail,"Please enter a valid email"]
    },
    password: {
        type: String,
        required:[true,"Please enter your password"],
        minLength:[8,"Password should be greater than 8 characters"],
        select: false
    },
    role: {
        type:String,
        default:"student",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre("save",async function(next){
    
    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password,10);
});

userSchema.methods.getJWTToken = function () {
    return jwt.sign({id:this._id},process.env.JWT_KEY,{
        expiresIn: process.env.JWT_EXPIRE
    });
}

userSchema.methods.checkPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
}

userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 20*60*1000;

    return resetToken;
}

const User = mongoose.model("User",userSchema);

export { User };