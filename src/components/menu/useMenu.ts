import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { menuActions } from '../../store/menu-slice';

interface MenuHook {
  isOpenMenu: boolean;
  handleClick: () => void;
}

export function useMenu(): MenuHook {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpenMenu = useSelector((state: RootState) => state.menu.isOpenMenu);

  const handleClick = () => {
    dispatch(menuActions.logout());
    navigate('/');
  };

  return {
    isOpenMenu,
    handleClick,
  };
}
