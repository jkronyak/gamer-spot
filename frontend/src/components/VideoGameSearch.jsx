import React, { useState } from 'react';
import axios from 'axios';

const VideoGameSearch = () => {
  const [foundGames, setFoundGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  
  const handleSearch = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/games/search?searchTerm=?${searchTerm}`
    );
    setFoundGames(data);
  };
  const handleInputChange = async (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Video Game Search</h1>
      <form>
        <input type='text' onChange={handleInputChange}></input>
        <button onClick={handleSearch}>Search</button>
      </form>
      {foundGames.length === 0 ? <p>Nothing here.</p> : null}
      <div>
        <ul>
          {foundGames.map((game) => {
            return (
              <li key={game.id}>
                <a href={`/games/${game.id}`}>{game.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default VideoGameSearch;
