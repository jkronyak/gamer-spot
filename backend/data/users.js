
import { users } from "../config/mongoCollections.js";

async function createUser() { 
	const usersCollection = await users();

	const userToAdd = {
		'username': 'testUser',
		'password': 'testPassword'
	}

	const newUser = await usersCollection.insertOne(userToAdd);
	return newUser;
}

export { createUser };