import './GameActionCard.css'

function GameActionCard(props) {
  return (
    <div className='game-action-card'>
      <img className='game-action-card-image' src={props.imageUrl} />
      <span className='game-action-card-rating'>{props.rating}/{props.topRating}</span>
      <button className='game-action-card-button'>Add Game</button>
    </div>
  )
}
  
export default GameActionCard