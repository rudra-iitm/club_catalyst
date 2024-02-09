import { Router } from "express";

const router = Router();

router.get('/roles', (req, res) => {
    res.json({
        msg: "Get all available roles"
    });
})

router.get('/permissions', (req, res) => {
    res.json({
        msg: "Get permissions for a specific role."
    });
})

export default router;