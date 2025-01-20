import './GameFilter.css'

function GameFilter({ filterData, onChange }) {
  return (
    <div className='game-filter'>
      <h2 className='game-filter-title'>Filter</h2>
      <div className='game-filter-options'>
        <label htmlFor='release-date'>Release Date</label>
        <input id="release-date" name='releaseDate' type='date' value={filterData.releaseDate} onChange={onChange} />
      </div>
    </div>
  )
}

export default GameFilter