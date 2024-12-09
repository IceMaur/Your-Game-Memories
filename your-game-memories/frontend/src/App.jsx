import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Home  from './pages/Home/Home.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Header />
      <Home />
    </>
  )
}

export default App
