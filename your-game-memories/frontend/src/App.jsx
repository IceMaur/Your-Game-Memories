import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx'
import Home  from './pages/home/Home.jsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
