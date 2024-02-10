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
    approvalChain: {
        type: [String],
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    }
});

const Request = mongoose.model("Request",requestSchema);

export { Request };