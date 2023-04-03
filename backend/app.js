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

const generateTwitchToken = async () => { 
	const clientId = process.env.TWITCH_CLIENT_ID;
	const clientSecret = process.env.TWITCH_CLIENT_SECRET;
	const url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
	try {
		const response = await axios.post(url);
		const { access_token } = response.data;
		process.env.TWITCH_AUTH_TOKEN = access_token;
	} catch (error) {
		console.log(error);
	}
}

app.listen(port, () => { 
	console.log(`Server running on http://localhost:${port}/`)
});

generateTwitchToken();