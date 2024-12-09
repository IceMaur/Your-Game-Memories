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
        </ul>
      </nav>
    </header>
  )
}
  
export default Header
  