import './GameScreenshots.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GameScreenshots(props) {
  const [screenshots, setScreenshots] = useState(null);
  const [error, setError] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + screenshots.length) % screenshots.length
    );
  };

  useEffect(() => {
    async function fetchGameScreenshots() {
      try {
        const result = await axios.get(`https://api.rawg.io/api/games/${props.id}/screenshots?key=${import.meta.env.VITE_API_KEY_GAMES}`);
        setScreenshots(result.data.results);
      } catch (e) {
        setError(e);
        console.error(e);
      }
    }

    fetchGameScreenshots();
  }, [props.id]);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!screenshots) {
    return <p>Loading...</p>;
  }

  return (
    <div className="slider">
      <button className="prev" onClick={handlePrev}>❮</button>
      <img src={screenshots[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
      <button className="next" onClick={handleNext}>❯</button>
    </div>
  )
}
  
export default GameScreenshots
  