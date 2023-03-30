import { Router } from 'express';
const router = Router();

router.get('/', async (req, res) => { 
	return res.json("Hello Reviews!");
});

export default router;