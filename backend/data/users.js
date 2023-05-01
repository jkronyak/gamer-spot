import { users } from "../config/mongoCollections.js";
import bcrypt from 'bcryptjs';
const saltRounds = 12;
import { ObjectId } from 'mongodb';

async function createUser(username, password) { 
	const userCollection = await users();
	const foundUser = await userCollection.findOne({ username: username });
	if (foundUser !== null) throw `Error: User with username ${username} already exists!`;

	const hashedPassword = await bcrypt.hash(password, saltRounds);
	const insertInfo = await userCollection.insertOne({ username: username, password: hashedPassword });
	if(!insertInfo.acknowledged || !insertInfo.insertedId) throw 'Error: Could not create user!';
	console.log(insertInfo);
	return { _id: insertInfo.insertedId.toString(), username: username };
}

async function checkUser(username, password) { 
	const userCollection = await users();
	const foundUser = await userCollection.findOne({ username: username });
	if(foundUser === null || !bcrypt.compare(password, foundUser.password)) throw `Error: Either the username or password is incorrect!`;
	
	return { _id: foundUser._id.toString(), username: foundUser.username };
}

async function getUserById(uid) { 
	const userCollection = await users();
	const foundUser = await userCollection.findOne({ _id: new ObjectId(uid) });
	if(foundUser === null) throw `Error: User with id ${uid} not found!`;

	return { _id: foundUser._id.toString(), username: foundUser.username };
}

export { createUser, checkUser, getUserById };