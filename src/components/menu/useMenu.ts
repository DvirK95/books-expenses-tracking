import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { menuActions } from '../../store/menu-slice';
import { useOutsideClick } from '../useOutsideClick';

interface MenuHook {
  isOpenMenu: boolean;
  handleClick: () => void;
  outsideClick: React.RefObject<HTMLDivElement>;
}

export function useMenu(): MenuHook {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpenMenu = useSelector((state: RootState) => state.menu.isOpenMenu);

  const handleClick = () => {
    dispatch(menuActions.logout());
    navigate('/');
  };

  const outsideClick = useOutsideClick(() => {
    if (isOpenMenu) {
      dispatch(menuActions.switchBtn());
    }
  });

  return {
    isOpenMenu,
    handleClick,
    outsideClick,
  };
}
