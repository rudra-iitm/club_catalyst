import { Router } from "express";

const router = Router();

router.post('/', (req, res) => {
    res.json({
        msg: "Create a new request."
    });
})

router.get('/:id', (req, res) => {
    const id = req.params['id'];
    res.json({
        msg: `Get details of a specific request ${id}`
    });
})

router.put('/:id', (req, res) => {
    const id = req.params['id'];
    res.json({
        msg: `Update an existing request. ${id}`
    });
})

router.delete('/:id', (req, res) => {
    const id = req.params['id'];
    res.json({
        msg: `Delete a request. ${id}`
    });
})

export default router;