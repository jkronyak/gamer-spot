import express from 'express';
const app = express();
import configRoutes from './routes/index.js';

configRoutes(app);

app.listen(4000, () => { 
	console.log("Server running on http://localhost:4000/")
});