import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import TempContextProvider from './context/TempContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <TempContextProvider>
        <App />
      </TempContextProvider>
    </Router>
  </StrictMode>,
)
