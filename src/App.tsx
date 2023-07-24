import Login from './Screens/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { RootState } from './store/store';
import { useSelector } from 'react-redux';
import MyBooks from './Screens/My-Books/MyBooks';
import AddBook from './Screens/Add-Book/AddBook';
import TotalExpenses from './Screens/Total-Expenses/TotalExpenses';

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.menu.isLogIn);

  if (isLoggedIn) {
    return (
      <>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<MyBooks />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/expenses" element={<TotalExpenses />} />
          </Routes>
        </main>
      </>
    );
  }
  return <>{!isLoggedIn && <Login />}</>;
}

export default App;
