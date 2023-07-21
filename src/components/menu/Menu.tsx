// Menu.tsx
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { useMenu } from './useMenu';
function Menu() {
  const { isOpenMenu, handleClick, outsideClick } = useMenu();

  if (isOpenMenu) {
    return (
      <aside className="sidebar" ref={outsideClick}>
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
          <div className="btn-wrapper">
            <button onClick={handleClick} className="btn btn-logout">
              Logout
            </button>
          </div>
        </nav>
      </aside>
    );
  }
  return <></>;
}

export default Menu;
