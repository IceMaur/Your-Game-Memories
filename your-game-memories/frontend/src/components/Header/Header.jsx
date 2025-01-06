import './Header.css'
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TempContext } from '../../context/TempContext';

function Header() {
  const { userJwtToken, setUserJwtToken } = useContext(TempContext);

  const handleLogout = () => {
    setUserJwtToken('');
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Games</NavLink>
          </li>
          <li>
            {!userJwtToken && (
              <NavLink to="/login" className="login-button">Login</NavLink>
            )}
            {userJwtToken && (
              <a className="login-button" onClick={handleLogout}>Logout</a>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}
  
export default Header
  