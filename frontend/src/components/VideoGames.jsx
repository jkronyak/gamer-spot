import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function VideoGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/games`
      );
      setGames(data);
    };
    getData();
  }, []);

  return (
    <div>
      <ul>
        {games.map((game) => {
          return (
            <li key={game.id} className='game-list'>
              <a href={`/games/${game.id}`}>{game.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
