import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import webpack from 'webpack';
import dotenv from 'dotenv';
dotenv.config();

const ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify(process.env.ENVIRONMENT),
    'process.env.PORT': JSON.stringify(process.env.PORT),
    'process.env.MONGO_URL': JSON.stringify(process.env.MONGO_URL),
	'process.env.TWITCH_CLIENT_ID': JSON.stringify(process.env.TWITCH_CLIENT_ID),
	'process.env.TWITCH_CLIENT_SECRET': JSON.stringify(process.env.TWITCH_CLIENT_SECRET),
	'process.env.TWITCH_AUTH_TOKEN': JSON.stringify(process.env.TWITCH_AUTH_TOKEN)
}

export default {
    entry: path.resolve(__dirname, 'app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'backend.bundle.js'
    },
    target: 'node',
    plugins: [ 
        new webpack.DefinePlugin(ENVIRONMENT_VARIABLES)
    ],
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	}
}