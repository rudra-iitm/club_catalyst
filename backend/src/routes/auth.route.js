import { Router } from "express";

const router = Router();

router.post('/login', (req, res) => {
    res.json({
        msg: " Authenticate users and generate JWT token"
    });
})

router.post('/logout', (req, res) => {
    res.json({
        msg: "Logout user and invalidate token"
    });
})

export default router;