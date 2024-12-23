import './GameBackground.css'

function GameBackground(props) {
  return (
    <div id="game-background">
      <img className="game-background-cover" src={props.backgroundImage } />
      <div className='game-title-container'>
        <h1>{props.name}</h1>
      </div>
    </div>
  )
}
  
export default GameBackground