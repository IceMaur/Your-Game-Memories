import './GameDetails.css'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GameBackground from '../../components/game-background/GameBackground';

function GameDetails() {
  const [game, setGame] = useState(null);
  const [error, setError] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    async function fetchGameDetails() {
      try {
        const result = await axios.get(`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY_GAMES}`);
        setGame(result.data);
      } catch (e) {
        setError(e);
        console.error(e);
      }
    }

    fetchGameDetails();
  }, []); 

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!game) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <GameBackground name={game.name} backgroundImage={game.background_image} />
    </>
  )
}
  
export default GameDetails