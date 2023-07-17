// Menu.tsx
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { useMenu } from './useMenu';
function Menu() {
  const { isOpenMenu, handleClick } = useMenu();

  if (isOpenMenu) {
    return (
      <aside className="sidebar">
        <nav className="menu-container">
          <ul>
            <li>
              <NavLink to="/">My Books</NavLink>
            </li>
            <li>
              <NavLink to="/add">Add Book</NavLink>
            </li>
            <li>
              <NavLink to="/expenses">Expenses</NavLink>
            </li>
          </ul>
        </nav>
        <div className="btn-wrapper">
          <button onClick={handleClick} className="btn btn-logout">
            Logout
          </button>
        </div>
      </aside>
    );
  }
  return <></>;
}

export default Menu;
