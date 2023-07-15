import Login from './screens/Login/Login';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import { Route, Routes } from 'react-router-dom';
import { RootState } from './store/store';
import { useSelector } from 'react-redux';
import MyBooks from './screens/My-Books/MyBooks';

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.menu.isLogIn);

  if (isLoggedIn) {
    return (
      <>
        <Navbar />
        <Menu />
        <main className="container">
          <Routes>
            <Route path="/" element={<MyBooks />} />
          </Routes>
        </main>
      </>
    );
  }
  return <>{!isLoggedIn && <Login />}</>;
}

export default App;
