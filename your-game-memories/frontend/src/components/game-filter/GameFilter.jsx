import './GameFilter.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GameFilter({ filterData, onChange }) {
    const [platforms, setPlatforms] = useState([]);
    const [tags, setTags] = useState([]);
    const [genres, setGenres] = useState([]);
    const [publishers, setPublisher] = useState([]);

    useEffect(() => {
      const fetchData = async (endpoint, setter) => {
          try {
              const result = await axios.get(`https://api.rawg.io/api/${endpoint}?key=${import.meta.env.VITE_API_KEY_GAMES}`);
              setter(result.data);
          } catch (e) {
              console.error(`Failed to fetch ${endpoint}:`, e);
          }
      };

      fetchData('platforms', setPlatforms);
      fetchData('publishers', setPublisher);
      fetchData('tags', setTags);
      fetchData('genres', setGenres);
  }, []);

  return (
    <div className='game-filter'>
      <h2 className='game-filter-title'>Filter</h2>
        <div className='game-filter-options'>
          <label htmlFor='platforms'>Platform</label>
          <select id="platforms" name='platform' value={filterData.platform} onChange={onChange}>
            <option value=''>All</option>
            {platforms.results && platforms.results.map((platform) => (
              <option key={platform.id} value={platform.id}>{platform.name}</option>
            ))}
          </select>
          <label htmlFor='publishers'>Publishers</label>
          <select id="publishers" name='publisher' value={filterData.publisher} onChange={onChange}>
            <option value=''>All</option>
            {publishers.results && publishers.results.map((publisher) => (
              <option key={publisher.id} value={publisher.id}>{publisher.name}</option>
            ))}
          </select>
          <label htmlFor='tags'>Tags</label>
          <select id="tags" name='tag' value={filterData.tag} onChange={onChange}>
            <option value=''>All</option>
            {tags.results && tags.results.map((tag) => (
              <option key={tag.id} value={tag.id}>{tag.name}</option>
            ))}
          </select>
          <label htmlFor='genres'>Genres</label>
          <select id="genres" name='genre' value={filterData.genre} onChange={onChange}>
            <option value=''>All</option>
            {genres.results && genres.results.map((genre) => (
              <option key={genre.id} value={genre.id}>{genre.name}</option>
            ))}
          </select>
        <label htmlFor='release-date'>Release Date</label>
        <input id="release-date" name='releaseDate' type='date' value={filterData.releaseDate} onChange={onChange} />
      </div>
    </div>
  )
}

export default GameFilter