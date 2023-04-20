import { Router } from 'express';
const router = Router();
import { userData } from '../data/index.js';
import jwt from 'jsonwebtoken';

router.post('/register', async (req, res) => {
	try { 
		const { username, password } = req.body;
		const newUser = await userData.createUser(username, password);
		return res.json(newUser);
	} catch (e) { 
		return res.status(500).json({ error: e });
	}
});

router.post('/login', async (req, res) => { 
	try { 
		const { username, password } = req.body;
		const user = await userData.checkUser(username, password);
		
		const token = jwt.sign(
			{
				_id: user._id, 
				username: user.username
			},
			'secretsecret',
			{ expiresIn: '24h' }
		);
		return res.json({ _id: user._id, username: user.username, token: token });

	} catch (e) { 
		console.log(e);
		return res.status(500).json({ error: e });
	}
})

export default router;