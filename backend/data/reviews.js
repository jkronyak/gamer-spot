import { reviews } from '../config/mongoCollections.js';
import { ObjectId } from 'mongodb';

async function createReview(gameId, userId, username, reviewTitle, reviewBody, rating) {
	const reviewCollection = await reviews();
	const insertInfo = await reviewCollection.insertOne({ gameId: gameId, userId: new ObjectId(userId), username: username, reviewTitle: reviewTitle, reviewBody: reviewBody, rating: rating });
	if (!insertInfo.acknowledged || !insertInfo.insertedId) throw 'Error: Could not create review!';
	return { _id: insertInfo.insertedId.toString(), gameId: gameId, userId: userId, username: username, reviewTitle: reviewTitle, reviewBody: reviewBody, rating: rating };
}

async function getReviewsByGameId(gameId) {
	const reviewCollection = await reviews();
	const foundReviews = await reviewCollection.find({ gameId: Number(gameId) }).toArray();
	if (foundReviews.length === 0) throw 'Error: No reviews found!';
	return foundReviews;
}

export { createReview, getReviewsByGameId };