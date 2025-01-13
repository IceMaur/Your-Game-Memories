import AllGamesOverview from "../../components/all-games-overview/AllGamesOverview";
import './Home.css'
import React, { useState } from 'react';

function Home() {
    const [searchText, setSearchText] = useState("");
    const handleChangeSearchText = (e) => setSearchText(e.target.value);

  return (
    <div id="home-page">
      <div className="search-bar">
        <input placeholder="Search..." className="search-bar-input" type="text" value={searchText} onChange={handleChangeSearchText} />
      </div>
      <AllGamesOverview searchText={searchText} />
    </div>
  )
}
  
export default Home