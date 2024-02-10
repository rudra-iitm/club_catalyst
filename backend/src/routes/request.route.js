import { Router } from "express";
import { approvedByChairSAP, approvedByFA, generateRequest, recommendClubSec } from "../controllers/request.controller.js";

const router = Router();

router.post('/submit', generateRequest)
router.post('/recommend/clubS/:requestId', recommendClubSec)
router.post('/approve/:requestId', approvedByFA)
router.post('/approvalByChairSap/:requestID',approvedByChairSAP)

export default router;