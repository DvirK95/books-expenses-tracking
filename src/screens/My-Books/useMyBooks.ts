import  { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Book from '../../models/book-model';

function useMyBooks() {
  const allBooks = useSelector((state: RootState) => state.book.books);
  const [filters, setFilters] = useState({
    bookName: '',
    author: '',
    purchaseDate: '',
    price: '',
  });
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  return {allBooks, filters, setFilters, filteredBooks, setFilteredBooks}
}
export default useMyBooks ;