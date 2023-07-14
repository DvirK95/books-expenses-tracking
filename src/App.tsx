import { useState, useEffect } from 'react';
import Login from './screens/Login/Login';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import { Route, Routes } from 'react-router-dom';
import { RootState } from './store/store';
import { useSelector, useDispatch } from 'react-redux';
import { menuActions } from './store/menu-slice';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.menu.isLogIn);

  //const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  /*useEffect(() => {
    const loginStatus = localStorage.getItem('Login') === 'true';
    setIsLoggedIn(loginStatus);
  }, []);
*/
  if (isLoggedIn) {
    return (
      <>
        <Navbar />
        <Menu />
        <Routes>{/*<Route path="/" element={<Home />} />*/}</Routes>
      </>
    );
  }
  return <>{!isLoggedIn && <Login />}</>;
}

export default App;
