import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx'
import Home  from './pages/home/Home.jsx'
import GameDetails from './pages/game-details/GameDetails.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/games/:id" element={<GameDetails/>}/>
      </Routes>
    </>
  )
}

export default App
