import { Router } from "express";

const router = Router();

router.get('/:id', (req, res) => {
    const id = req.params['id'];
    res.json({
        msg: "Get user details."
    });
})

router.put('/:id', (req, res) => {
    const id = req.params['id'];
    res.json({
        msg: `update user details ${id}`
    });
})

router.delete('/:id', (req, res) => {
    const id = req.params['id'];
    res.json({
        msg: `Delete user account ${id}`
    });
})

export default router;