import './GameCardsContainer.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from '../game-card/GameCard';

function GameCardsContainer() {
  const [games, setGames] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGames() {
      try {
        const result = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY_GAMES}`);
        console.log(result.data);
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
    <div className='game-cards-container'>
      {games.results.map((game) => (
        <GameCard key={game.id} name={game.name} imageUrl={game.background_image} />
      ))}
    </div>
  )
}
  
export default GameCardsContainer
  