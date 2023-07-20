import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Book from '../../models/book-model';

function useMyBooks() {
  let allBooks = useSelector((state: RootState) => state.book.books);
  
  // const sortedBooks = [...allBooks].sort(
  //   (a, b) => b.purchaseDate.getTime() - a.purchaseDate.getTime()
  // );

 const sortedBooks = () =>{
  allBooks.sort((book1, book2) => Number(book2.purchaseDate) - Number(book1.purchaseDate))
  }

  //const sortedBooks = arr1.sort(
  //(objA, objB) => Number(objA.date) - Number(objB.date),
//);

  useEffect(()=>{
    sortedBooks()
  },[])


  const cleanFilter = {
    bookName: '',
    author: '',
    purchaseDate: '',
    price: '',
  };
  const [filters, setFilters] = useState(cleanFilter);

  

  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  const handleFilter = (filterBooks: Book[]) => {
    setFilteredBooks(filterBooks);
  };

  const handleClear = () => {
    setFilters(cleanFilter);
  };

  return {
    allBooks,
    filters,
    setFilters,
    filteredBooks,
    setFilteredBooks,
    handleClear,
    handleFilter
  };
}

export default useMyBooks;
