import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const settings = { 
	mongoConfig: {
		serverUrl: process.env.MONGO_URL,
		database: 'gamerspot-db'
	}
};

const mongoConfig = settings.mongoConfig;
let _connection = undefined;
let _db = undefined;

const dbConnection = async () => { 
	if (!_connection) { 
		_connection = await MongoClient.connect(mongoConfig.serverUrl);
		_db = _connection.db(mongoConfig.database);
	}

	return _db;
};
const closeConnection = async () => { 
	await _connection.close();
};

export { dbConnection, closeConnection };
