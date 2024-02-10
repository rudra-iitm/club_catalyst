import { Router } from "express";
import { approvedByFA, generateRequest, recommendClubSec } from "../controllers/request.controller.js";

const router = Router();

router.post('/submit', generateRequest)
router.post('/recommend/clubS', recommendClubSec)
router.post('/approve', approvedByFA)

export default router;