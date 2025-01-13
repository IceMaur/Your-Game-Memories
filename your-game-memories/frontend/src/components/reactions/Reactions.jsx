import './Reactions.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Reactions(props) {
  const [reactions, setReactions] = useState(null);

  useEffect(() => {
    async function fetchReactions() {
      try {
        const result = await axios.get(`https://api.rawg.io/api/games/${props.id}/reddit?key=${import.meta.env.VITE_API_KEY_GAMES}`);
        setReactions(result.data.results);
      } catch (e) {
        console.error(e);
      }
    }

    fetchReactions();
  }, []);

  if (reactions) {
    return (
      <>
        <h2 className="reactions-title">Reactions</h2>
        {reactions.map((reaction, index) => (
          <article key={index} className="reaction">
            <div dangerouslySetInnerHTML={{ __html: reaction.text }}></div>
            <a href={reaction.url} target="_blank" rel="noreferrer">Read more</a>
            <p className='reaction-username'><i>{reaction.username}</i></p>
          </article>
        ))}
      </>
    )
  }
}
  
export default Reactions
  