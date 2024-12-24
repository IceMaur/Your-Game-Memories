import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx'
import Home  from './pages/home/Home.jsx'
import GameDetails from './pages/game-details/GameDetails.jsx';
import Login from './pages/login/login.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/games/:id" element={<GameDetails />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  )
}

export default App
