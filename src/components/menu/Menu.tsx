import { RootState } from '../../store/store';
import './Menu.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Menu() {
  const isOpenMenu = useSelector((state: RootState) => state.menu.isOpenMenu);

  if (isOpenMenu) {
    return (
      <aside className="sidebar-nav">
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
        <button className="btn btn-logout">Logout</button>
      </aside>
    );
  }
  return <></>;
}
export default Menu;
