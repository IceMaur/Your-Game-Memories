import AllGamesOverview from "../../components/all-games-overview/AllGamesOverview";
import GameFilter from "../../components/game-filter/GameFilter";
import './Home.css'
import React, { useState } from 'react';

function Home() {
    const [searchText, setSearchText] = useState("");
    const handleChangeSearchText = (e) => setSearchText(e.target.value);

    const [filterData, setFilterData] = useState({
      releaseDate: '',
      platform: 0,
      tag: 0,
      genre: 0,
      publisher: 0,
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setFilterData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

  return (
    <div id="home-page">
      <aside>
        <GameFilter filterData={filterData} onChange={handleChange} />
      </aside>
      <div>
        <div className="search-bar">
          <input placeholder="Search..." className="search-bar-input" type="text" value={searchText} onChange={handleChangeSearchText} />
        </div>
        <AllGamesOverview searchText={searchText} filterData={filterData} />
      </div>
    </div>
  )
}
  
export default Home