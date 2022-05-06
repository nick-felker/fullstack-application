import { Router } from "express";

const router = Router();

router.post('./registration');
router.get('./login');
router.get('./auth', (req, res)=> {
    res.json({message: 'work'});
});
export default router;