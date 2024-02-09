import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: "Get pending approval requests for the current user."
    });
})

router.post('/approve/:id', (req, res) => {
    const id = req.params['id'];
    res.json({
        msg: `Approve a request. ${id}`
    });
})

router.post('/reject/:id', (req, res) => {
    const id = req.params['id'];
    res.json({
        msg: `Reject a request ${id}`
    });
})

export default router;