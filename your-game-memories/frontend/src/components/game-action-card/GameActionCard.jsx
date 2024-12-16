import './GameActionCard.css'

function GameActionCard(props) {
  return (
    <div className='game-action-card'>
      <img className='game-action-card-image' src={props.imageUrl} />
      <p className='game-action-card-rating'>{props.rating}/{props.topRating}</p>
      <button className='game-action-card-button'>Add Game</button>
    </div>
  )
}
  
export default GameActionCard