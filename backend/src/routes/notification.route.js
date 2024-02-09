import { Router } from "express";

const router = Router();

router.post('/', (req, res) => {
    res.json({
        msg: "Send notifications to users"
    });
})

export default router;