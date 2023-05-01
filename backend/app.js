import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
import configRoutes from './routes/index.js';

if(process.env.ENVIRONMENT !== 'production') { 
	dotenv.config();
}

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => { 
	console.log(`[${req.method}] ${req.originalUrl}`);
	next();
})

configRoutes(app);

app.use(express.static(path.join(__dirname, '../../../root/frontend/build')));

app.get('*', (_, res) => { 
	res.sendFile(path.join(__dirname, '../../../root/frontend/build/index.html'))
});

app.listen(port, () => { 
	console.log(`Server running on http://localhost:${port}/`)
});
