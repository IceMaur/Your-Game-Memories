import './Header.css'
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { TempContext, UsernameContext } from '../../context/TempContext';

function Header() {
  const navigate = useNavigate();
  const { userJwtToken, setUserJwtToken } = useContext(TempContext);
  const { setUsername } = useContext(UsernameContext);

  const handleLogout = () => {
    setUserJwtToken('');
    setUsername('');
    navigate('/');
  };

  return (
    <header>
      <nav>
        <ul>
          {userJwtToken && (
            <li>
              <NavLink to="/your-game-memories">Memories</NavLink>
            </li>
          )}
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
  