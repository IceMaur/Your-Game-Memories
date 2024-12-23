import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Games</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="login-button">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
  
export default Header
  