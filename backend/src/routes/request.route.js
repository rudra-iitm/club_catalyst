import { Router } from "express";
import { recommendSocietyFA,approvedByChairSAP,approvedBySocietyFA, approvedByFA, generateRequest, recommendClubSec, getAllRequest, getRequestsByClub, getApprovedRequest, approvedByDeanStudents } from "../controllers/request.controller.js";
import { isAuthorizedUser } from "../middlewares/auth.js";

const router = Router();

router.post('/submit', generateRequest)
router.post('/recommend/clubS/:requestId',isAuthorizedUser,  recommendClubSec)
router.post('/approve/:requestId',isAuthorizedUser, approvedByFA)
router.post('/recommendedBySocietyFA/:requestId',isAuthorizedUser, recommendSocietyFA)
router.post('/approveBySocietyFA/:requestId',isAuthorizedUser, approvedBySocietyFA)
router.post('/approvalByChairSap/:requestId',approvedByChairSAP)
router.post('/approvalByDeanStudents/:requestId',approvedByDeanStudents)
router.get('/all',getAllRequest)
router.get('/',getRequestsByClub)
router.get('/',getApprovedRequest)

export default router;