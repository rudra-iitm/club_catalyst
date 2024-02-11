import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
    club: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    attachment: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: true
    },
    totalApprovedAmount: {
        type: Number,
        required: true
    },
    approvalChain: {
        type: [String],
        required: true
    },
    secretaryRecommendation: {
        type: String,
        required: false
    },
    societyFARecommendation: {
        type: String,
        required: false
    },
    recommend_status: {
        type: String,
        enum: ['None', "Recommended by Secretary", 'Recommended by Society FA'],
        default: 'None'
    },
    approved_status: {
        type: String,
        enum: ['Pending', 'Approved by Society FA', 'Approved by chairSAP', 'Approved by Club FA', 'Rejected', 'Approved'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Request = mongoose.model("Request",requestSchema);

export { Request };