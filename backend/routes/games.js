import { Router } from 'express';
const router = Router();
import { gameData } from '../data/index.js';

router.get('/', async (_, res) => {
	const data = await gameData.getAllGames();
	return res.json(data);
});

router.get('/search', async (req, res) => {
	const searchTerm = req.query.searchTerm;
	const data = await gameData.getGamesBySearchTerm(searchTerm);
	return res.json(data);
});

router.get('/:id', async (req, res) => { 
	const id = req.params.id;
	const data = await gameData.getGameById(id);
	return res.json(data);
});


export default router;