import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Book from '../../models/book-model';

function useMyBooks() {
  let allBooks = useSelector((state: RootState) => state.book.books);

  const sortedBooks = [...allBooks].sort((a, b) => b.purchaseDate.getTime() - a.purchaseDate.getTime());

  const cleanFilter = {
    bookName: '',
    author: '',
    purchaseDate: '',
    price: '',
  };
  const [filters, setFilters] = useState(cleanFilter);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  const handleClear = () => {
    setFilters(cleanFilter);
  };

  return {
    allBooks: sortedBooks,
    filters,
    setFilters,
    filteredBooks,
    setFilteredBooks,
    handleClear,
  };
}

export default useMyBooks;
