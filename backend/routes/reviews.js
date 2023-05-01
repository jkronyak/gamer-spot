import { Router } from 'express';
const router = Router();
import { reviewData } from "../data/index.js";
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

router.post('/', authMiddleware, async (req, res) => {
	try { 
		const { gameId, userId, username, reviewTitle, reviewBody, rating } = req.body;
		const review = await reviewData.createReview(gameId, userId, username, reviewTitle, reviewBody, rating);
		return res.json(review);
	} catch (e) {
		return res.status(500).json({ error: e });
	}
});

router.get('/:gid', async (req, res) => { 
	try { 
		const gid = req.params.gid;
		const foundReviews = await reviewData.getReviewsByGameId(gid);
		return res.json(foundReviews);
	} catch (e) { 
		return res.status(500).json({ error: e });
	}
})

router.get('/', authMiddleware, async (req, res) => { 
	return res.json("Hello Reviews!");
});

export default router;