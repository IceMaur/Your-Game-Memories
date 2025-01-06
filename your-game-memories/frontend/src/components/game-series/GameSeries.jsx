import './GameSeries.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameCardsContainer from '../game-cards-container/GameCardsContainer';

function 
GameSeries(props) {
  const [games, setGames] = useState(null);

  useEffect(() => {
    async function fetchGames() {
      try {
        const result = await axios.get(`https://api.rawg.io/api/games/${props.id}/game-series?key=${import.meta.env.VITE_API_KEY_GAMES}`);
        setGames(result.data);
      } catch (e) {
        setError(e);
        console.error(e);
      }
    }

    fetchGames();
  }, []);

  if (!games) {
    return <p>Loading...</p>;
  }

  return (
    <div className='game-series'>
      <h2 className='game-series-title'>Game serie</h2>
      <GameCardsContainer games={games} />
    </div>
  )
}
  
export default GameSeries
  