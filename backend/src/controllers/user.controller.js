import asyncHandler from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const loginUser = asyncHandler( async (req, res) => {
    return res.status(201).json(
        new ApiResponse(201, {msg: 'login user'}, )
    )
})

const logoutUser = asyncHandler( async (req, res) => {
    return res.status(201).json(
        new ApiResponse(201, {msg: 'logout user'}, )
    )
})

export { loginUser, logoutUser }