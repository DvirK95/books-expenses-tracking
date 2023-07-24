import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { menuActions } from '../../store/menu-slice';
import { ReactComponent as XIcon } from '../../assets/icons/xmark-solid.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/icons/bars-solid.svg';
import Menu from '../Menu/Menu';

function Navbar() {
  const isOpenMenu = useSelector((state: RootState) => state.menu.isOpenMenu);
  const dispatch = useDispatch();

  const handleSwitchBtn = () => {
    dispatch(menuActions.switchBtn());
  };

  return (
    <>
      <header>
        <button onClick={handleSwitchBtn} className="icon-manu">
          {isOpenMenu ? <XIcon /> : <HamburgerIcon />}
        </button>
      </header>
      <Menu />
    </>
  );
}

export default Navbar;
