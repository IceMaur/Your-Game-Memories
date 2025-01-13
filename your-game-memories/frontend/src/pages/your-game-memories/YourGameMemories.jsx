import './YourGameMemories.css'
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { TempContext, UsernameContext } from '../../context/TempContext';
import GameCardsContainer from '../../components/game-cards-container/GameCardsContainer';

function YourGameMemories() {
  const { userJwtToken } = useContext(TempContext);
  const { username } = useContext(UsernameContext);
  const [gameIds, setGameIds] = useState([]);
  const [games, setGames] = useState([]);

  const headers = {
    'Content-Type': 'application/json',
    'X-Api-Key': import.meta.env.VITE_API_KEY_BACKEND,
    'Authorization': `Bearer ${userJwtToken}`
  }

  useEffect(() => {
    async function fetchGameIds() {
      if (!username) {
        return;
      }

      try {
        const result = await axios.get(`https://api.datavortex.nl/yourgamememories/users/${username}`, { headers: headers });
        setGameIds(result.data.info.split(','));
      } catch (e) {
        console.error(e);
      }
    }

    fetchGameIds();
  }, [username]);

  useEffect(() => {
    async function fetchGames() {
      const gamesForMemory = []; 
      for (const gameId of gameIds) {
        try {
          const result = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${import.meta.env.VITE_API_KEY_GAMES}`);
          gamesForMemory.push(result.data);
        } catch (e) {
          console.error(e);
        }
      }

      setGames(gamesForMemory);
    }

    fetchGames();
  }, [gameIds]);

  return (
    <div className="your-game-memories">
      <h1>Your Game Memories</h1>
      {games && <GameCardsContainer games={games} /> }
    </div>
  )
}
  
export default YourGameMemories