import { useState, useEffect } from 'react';
import Login from './screens/Login/Login';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('Login') === 'true';
    setIsLoggedIn(loginStatus);
  }, []);

  if (isLoggedIn) {
    return (
      <>
        <Navbar />
        <Menu />
        <Routes>{/*<Route path="/" element={<Home />} />*/}</Routes>
      </>
    );
  }
  return <>{!isLoggedIn && <Login isLogin={setIsLoggedIn} />}</>;
}

export default App;
