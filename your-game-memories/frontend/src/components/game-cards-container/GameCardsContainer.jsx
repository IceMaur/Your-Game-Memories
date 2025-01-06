import './GameCardsContainer.css'
import GameCard from '../game-card/GameCard';

function GameCardsContainer(props) {

  return (
    <div className='game-cards-container'>
      {props.games.results.map((game) => (
        <GameCard key={game.id} id={game.id} name={game.name} imageUrl={game.background_image} />
      ))}
    </div>
  )
}
  
export default GameCardsContainer
  