import axios from 'axios';
import { IGDB_BASE_URL } from '../utils/constants.js';

const fieldsString = "fields name,summary,url,category,genres.name,screenshots.url,similar_games.name,release_dates.date,cover.url";

const categoryEnum = { 
	0: 'Main Game',
	1: 'DLC/Addon',
	2: 'Expansion',
	3: 'Bundle',
	4: 'Stand-alone Expansion',
	5: 'Mod',
	6: 'Episode',
	7: 'Season',
	8: 'Remake',
	9: 'Remaster',
	10: 'Expanded Game',
	11: 'Port',
	12: 'Fork',
	13: 'Pack',
	14: 'Update'
}

const formatGame = (gameData) => {
	const formattedGame = { 
		name: gameData.name ? gameData.name : 'No name',
		summary: gameData.summary ? gameData.summary : 'No summary',
		url: gameData.url ? gameData.url : 'No url',
		category: gameData.category ? categoryEnum[gameData.category] : 'No category',
		genres: gameData.genres ? gameData.genres.map((genre) => genre.name) : [],
		screenshots: gameData.screenshots ? gameData.screenshots.map((screenshot) => screenshot.url.replace('t_thumb', 't_screenshot_med')) : [],
		similar_games: gameData.similar_games ? gameData.similar_games : [],
		release_dates: gameData.release_dates ? gameData.release_dates.map((release_date) => release_date.date) : [],
		cover: gameData.cover ? { id: gameData.cover.id, url: gameData.cover.url.replace('t_thumb', 't_720p')} : 'No cover'
	}	

	return formattedGame;
}

export const getAllGames = async () => { 
	const { data } = await axios({
		url: IGDB_BASE_URL + '/games',
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Client-ID': process.env.TWITCH_CLIENT_ID,
			Authorization: `Bearer ${process.env.TWITCH_AUTH_TOKEN}`
		},
		data: `${fieldsString};`
	});

	const fData = data.map((game) => { 
		return formatGame(game);
	});

	return fData;
}

export const getGamesBySearchTerm = async (searchTerm) => { 
	const { data } = await axios({
		url: IGDB_BASE_URL + '/games',
		method: 'POST',
		headers: { 
			Accept: 'application/json',
			'Client-ID': process.env.TWITCH_CLIENT_ID,
			Authorization: `Bearer ${process.env.TWITCH_AUTH_TOKEN}`
		},
		data: `search "${searchTerm}"; ${fieldsString};`
	});

	const fData = data.map((game) => {
		return formatGame(game);
	});

	return fData;
}

export const getGameById = async (id) => { 
	const { data } = await axios({
		url: IGDB_BASE_URL + '/games',
		method: 'POST',
		headers: { 
			Accept: 'application/json',
			'Client-ID': process.env.TWITCH_CLIENT_ID,
			Authorization: `Bearer ${process.env.TWITCH_AUTH_TOKEN}`
		},
		data: `${fieldsString}; where id = ${id};`
	});
	
	const fData = formatGame(data[0]);

	return fData;
}