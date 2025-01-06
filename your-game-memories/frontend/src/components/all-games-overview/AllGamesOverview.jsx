import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameCardsContainer from '../game-cards-container/GameCardsContainer';

function AllGamesOverview() {
  const [games, setGames] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGames() {
      try {
        const result = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY_GAMES}`);
        setGames(result.data);
      } catch (e) {
        setError(e);
        console.error(e);
      }
    }

    fetchGames();
  }, []); 

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!games) {
    return <p>Loading...</p>;
  }

  return (
    <GameCardsContainer games={games} />
  )
}
  
export default AllGamesOverview
  