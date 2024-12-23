import { Link } from 'react-router-dom'
import './GameCard.css'

function GameCard(props) {
  return (
    <Link className='game-card-link' to={"/games/" + props.id}>
      <div className='game-card'>
        <img className='game-background-image' src={props.imageUrl} />
        <div className='game-details'>
          <h2 className='game-title'>{props.name}</h2>
        </div>
      </div>
    </Link>
  )
}
  
export default GameCard
  