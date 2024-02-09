import { Router } from "express";

const router = Router();

router.get('/register', (req, res) => {
    console.log("Hello from user");
    res.json({
        msg: "Hello from user route"
    });
})

export default router;