import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function useTotalExpeneses() {
  const books = useSelector((state: RootState) => state.book.books);
  const totalBooks: number = books.length;
  const totalPrice = useSelector((state: RootState) => state.book.totalPrice);

  return { totalBooks, totalPrice };
}
export default useTotalExpeneses;
