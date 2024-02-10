import { Request } from "../models/requestModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const generateRequest = asyncHandler( async (req, res) => {
    const { club, description, attachment, amount } = req.body;

    let approvalChain = [];
    if (amount <= 15000) {
        approvalChain = ['Club FA', 'Society FA', 'chairSAP'];
    } else if (amount <= 50000) {
        approvalChain = ['Secretary', 'Club FA', 'Society FA', 'chairSAP'];
    } else {
        approvalChain = ['Secretary', 'Club FA', 'Society FA', 'chairSAP', 'Dean Students'];
    }

    const request = await Request.create({
        club,
        description,
        attachment,
        amount,
        approvalChain,
    });

    // Send response
    return res.status(200).json(new ApiResponse(200, request, "Request submitted successfully"))
})


//recommendation by club sec
const recommendClubSec = asyncHandler( async(req, res) => {
    try {
        const requestId = req.params.requestId;
        const recommendation = req.body.recommendation;
        // Find the request by ID

        const request = await Request.findById(requestId);

        if (!request) {
            return new ApiError(404, "request not found");
        }

        // Update request with secretary recommendation
        request.secretaryRecommendation = recommendation;
        request.recommend_status = 'Recommended by Secretary';
        await request.save();

        return res.status(200).json(new ApiResponse(200, request, 'Recommendation added successfully'));
    } catch (error) {
        
        console.error(error);
        return new ApiError(500, 'Internal server error');
    }
})

// Route to handle approval by club FA
const approvedByFA = asyncHandler( async (req, res) => {
    try {
        const requestId = req.params.requestId;
        const approval = req.body.approval;

        // Find the request by ID
        const request = await Request.findById(requestId);

        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }

        // Update request with club FA approval
        request.clubFAApproval = approval;
        request.approved_status = 'Approved by Club FA';
        await request.save();

        res.status(200).json({ message: 'Approval added successfully', request });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

const recommendSocietyFA = asyncHandler( async(req, res) => {
    try {
        const requestId = req.params.requestId;
        const recommendation = req.body.recommendation;

        // Find the request by ID
        const request = await Request.findById(requestId);

        if (!request) {
            return new ApiError(404, "request not found");
        }

        request.societyFARecommendation = recommendation;
        request.recommend_status = 'Recommended by Society FA';
        await request.save();

        return res.status(200).json(ApiResponse(200, request, 'Recommendation added successfully'));
    } catch (error) {
        console.error(error);
        return new ApiError(500, 'Internal server error');
    }
})

const approvedBySocietyFA = asyncHandler( async (req, res) => {
    try {
        const requestId = req.params.requestId;
        const approval = req.body.approval;

        // Find the request by ID
        const request = await Request.findById(requestId);

        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }

        request.societyFAApproval = approval;
        request.approved_status = 'Approved by Society FA';
        await request.save();

        res.status(200).json({ message: 'Approval added successfully', request });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

const approvedByChairSAP = asyncHandler( async (req, res) => {
    try {
        const requestId = req.params.requestId;
        const approval = req.body.approval;

        // Find the request by ID
        const request = await Request.findById(requestId);

        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }

        request.societyFAApproval = approval;
        request.approved_status = 'Approved by chairSAP';
        await request.save();

        res.status(200).json({ message: 'Approval added successfully', request });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

export { generateRequest, recommendClubSec, approvedByFA, recommendSocietyFA, approvedByChairSAP, approvedBySocietyFA };