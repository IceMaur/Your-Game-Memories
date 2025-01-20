import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameCardsContainer from '../game-cards-container/GameCardsContainer';

function AllGamesOverview(props) {
  const [games, setGames] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGames() {
      const extendedQueryParameters = 
      (props.searchText ? `&search=${props.searchText}` : '') +
      (props.filterData.releaseDate ? `&dates=${props.filterData.releaseDate},2025-01-20` : '') +
      (props.filterData.platform > 0 ? `&platforms=${props.filterData.platform}` : '') +
      (props.filterData.publisher > 0 ? `&publishers=${props.filterData.publisher}` : '') +
      (props.filterData.tag > 0 ? `&tags=${props.filterData.tag}` : '') +
      (props.filterData.genre > 0 ? `&genres=${props.filterData.genre}` : '');

      try {
        const result = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY_GAMES}${extendedQueryParameters}`);
        console.log(result.data);
        setGames(result.data);
      } catch (e) {
        setError(e);
        console.error(e);
      }
    }

    fetchGames();
  }, [props.searchText, props.filterData]); 

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
  