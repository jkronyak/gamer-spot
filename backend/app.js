import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
import configRoutes from './routes/index.js';

if(process.env.ENVIRONMENT !== 'production') { 
	dotenv.config();
}

const port = process.env.PORT || 4000;

configRoutes(app);

app.use(express.static(path.join(__dirname, '../../../root/frontend/build')));

app.get('*', (_, res) => { 
	res.sendFile(path.join(__dirname, '../../../root/frontend/build/index.html'))
});

app.listen(port, () => { 
	console.log(`Server running on http://localhost:${port}/`)
});
