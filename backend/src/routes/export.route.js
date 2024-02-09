import { Router } from "express";

const router = Router();

router.get('/request', (req, res) => {
    res.json({
        msg: "Export request data to a spreadsheet"
    });
})

export default router;