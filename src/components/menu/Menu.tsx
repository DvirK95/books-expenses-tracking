import { RootState } from '../../store/store';
import './Menu.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { menuActions } from '../../store/menu-slice';

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpenMenu = useSelector((state: RootState) => state.menu.isOpenMenu);

  const handleClick = () => {
    dispatch(menuActions.logout());
    navigate('/');
  };

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
        <div>
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
