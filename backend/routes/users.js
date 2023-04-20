import { Router } from 'express';
const router = Router();
import { userData } from '../data/index.js';

router.get('/', async (_, res) => {
	const newUser = await userData.createUser();
	return res.json(newUser);
});

export default router;