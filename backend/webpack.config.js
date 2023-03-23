import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import webpack from 'webpack';
import dotenv from 'dotenv';
dotenv.config();

console.log("environment: ", process.env.ENVIRONMENT)
const ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify(process.env.ENVIRONMENT),
    'process.env.PORT': JSON.stringify(process.env.PORT),
    'process.env.MONGO_URL': JSON.stringify(process.env.MONGO_URL),
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