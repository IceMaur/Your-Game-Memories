import './GameActionCard.css'
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { TempContext, UsernameContext } from '../../context/TempContext';

function GameActionCard(props) {
  const { userJwtToken } = useContext(TempContext);
  const { username } = useContext(UsernameContext);
  const [info, setInfo] = useState([]);
  const [addMode, setAddMode] = useState(true);

  const headers = {
    'Content-Type': 'application/json',
    'X-Api-Key': import.meta.env.VITE_API_KEY_BACKEND,
    'Authorization': `Bearer ${userJwtToken}`
  }

  useEffect(() => {
    async function fetchUserInfo() {
      if (!username) {
        return;
      }

      try {
        const result = await axios.get(`https://api.datavortex.nl/yourgamememories/users/${username}`, { headers: headers });
        setInfo(result.data.info.split(','));
      } catch (e) {
        console.error(e);
      }
    }

    fetchUserInfo();
  }, [username]); 

  useEffect(() => {
    setAddMode(!info.includes(props.id));
  }, [info]); 

  async function addGame() {
    const updatedInfo = [...info, props.id]; 
    setInfo(updatedInfo);
    updateUserInfo(updatedInfo);
  }

  async function removeGame() {
    const updatedInfo = info.filter(item => item !== props.id); 
    setInfo(updatedInfo);
    updateUserInfo(updatedInfo);
  }

  async function updateUserInfo(updatedInfo) {
    try {
      await axios.put(`https://api.datavortex.nl/yourgamememories/users/${username}`, { info: updatedInfo.toString() }, { headers: headers });
  } catch (ex) {
    console.error(ex)
  }
  }

  return (
    <div className='game-action-card'>
      <img className='game-action-card-image' src={props.imageUrl} />
      <p className='game-action-card-rating'>{props.rating}/{props.topRating}</p>
      {userJwtToken && addMode &&
        <button className='game-action-card-button' onClick={addGame}>Add Game</button>
      }
      {userJwtToken && !addMode &&
        <button className='game-action-card-button' onClick={removeGame}>Remove Game</button>
      }
    </div>
  )
}
  
export default GameActionCard