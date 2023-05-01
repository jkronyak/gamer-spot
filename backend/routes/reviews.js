import { Router } from 'express';
const router = Router();
import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
	try { 
		const token = await req.headers.authorization.split(' ')[1];
		const decodedToken =  jwt.verify(
			token, 
			'secretsecret'
		);
		req.user = decodedToken;
		next();
	} catch (e) { 
		return res.status(401).json({ error: "Unauthorized" });
	}	
};

router.get('/', authMiddleware, async (req, res) => { 
	return res.json("Hello Reviews!");
});

export default router;