import './GameCardsContainer.css'
import GameCard from '../game-card/GameCard';

function GameCardsContainer(props) {
  const games = props.games.results ?? props.games;

  return (
    <div className='game-cards-container'>
      {games.map((game) => (
        <GameCard key={game.id} id={game.id} name={game.name} imageUrl={game.background_image} />
      ))}
    </div>
  )
}
  
export default GameCardsContainer
  