import './GameCard.css'

function GameCard(props) {
  return (
    <div className='game-card'>
      <img className='game-background-image' src={props.imageUrl} />
      <div className='game-details'>
        <h2 className='game-title'>{props.name}</h2>
      </div>
    </div>
  )
}
  
export default GameCard
  