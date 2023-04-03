import axios from 'axios';
import { IGDB_BASE_URL } from '../utils/constants.js';

const fieldsString = "fields name,url,category,genres,screenshots,similar_games,first_release_date,release_dates,cover;";

export const getAllGames = async () => { 
	const { data } = await axios({
		url: IGDB_BASE_URL + '/games',
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Client-ID': process.env.TWITCH_CLIENT_ID,
			Authorization: `Bearer ${process.env.TWITCH_AUTH_TOKEN}`,
		},
		data: `${fieldsString}`
	});

	return data;
}

export const getGamesBySearchTerm = async (searchTerm) => { 
	const { data } = await axios({
		url: IGDB_BASE_URL + '/games',
		method: 'POST',
		headers: { 
			Accept: 'application/json',
			'Client-ID': process.env.TWITCH_CLIENT_ID,
			Authorization: `Bearer ${process.env.TWITCH_AUTH_TOKEN}`,
		},
		data: `search "${searchTerm}"; ${fieldsString}`
	});

	return data;
}