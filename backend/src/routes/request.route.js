import { Router } from "express";
import { approvedByChairSAP, approvedByFA, generateRequest, recommendClubSec, getAllRequest, getRequestsByClub, getApprovedRequest, getRequestsByRole } from "../controllers/request.controller.js";
import { isAuthorizedUser } from "../middlewares/auth.js";

const router = Router();

router.post('/submit', generateRequest)
router.post('/recommend/clubS/:requestId',isAuthorizedUser,  recommendClubSec)
router.post('/approve/:requestId',isAuthorizedUser, approvedByFA)
router.post('/approvalByChairSap/:requestID',approvedByChairSAP)
router.get('/all',getAllRequest)
router.get('/',getRequestsByClub)
router.get('/',getApprovedRequest)

export default router;