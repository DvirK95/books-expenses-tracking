import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Book from '../../models/book-model';

function useMyBooks() {
  let allBooks = useSelector((state: RootState) => state.book.books);
  const [sortedBooks, setSortedBooks] = useState<Book[]>([]);

  useEffect(() => {
    const sorted = [...allBooks];
    // convert to iso to number and sort
    sorted.sort(
      (book1, book2) =>
        new Date(book2.purchaseDate).getTime() -
        new Date(book1.purchaseDate).getTime()
    );
    setSortedBooks(sorted);
  }, [allBooks]);

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
