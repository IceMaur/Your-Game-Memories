import './GameDetails.css'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GameBackground from '../../components/game-background/GameBackground';
import GameActionCard from '../../components/game-action-card/GameActionCard';
import GameScreenshots from '../../components/game-screenshots/GameScreenshots';
import Reactions from '../../components/reactions/Reactions';
import GameSeries from '../../components/game-series/GameSeries';

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
  }, [id]); 

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!game) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <GameBackground name={game.name} backgroundImage={game.background_image_additional} />
      <div className='content'>
        <div className='content-main'>
          <section>
            <div className='content-description' dangerouslySetInnerHTML={{ __html: game.description }} />
          </section>
          <GameScreenshots id={id} />
          <Reactions id={id} />
        </div>
        <aside>
          <GameActionCard id={id} imageUrl={game.background_image} rating={game.rating} topRating={game.rating_top} />
        </aside>
      </div>
      <GameSeries id={id} />
    </>
  )
}
  
export default GameDetails