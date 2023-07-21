import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Book from '../../../models/book-model';

function useSectorization() {
  let allBooks = useSelector((state: RootState) => state.book.books);
  const [sortedBooks, setSortedBooks] = useState<Book[]>([]);

  useEffect(() => {
    const sorted = [...allBooks];
    // iso => number => sort
    sorted.sort(
      (book1, book2) =>
        new Date(book2.purchaseDate).getTime() -
        new Date(book1.purchaseDate).getTime()
    );
    setSortedBooks(sorted);
  }, [allBooks]);

  const [groupedBooks, setGroupedBooks] = useState<{ [key: string]: Book[] }>(
    {}
  );

  return {
    allBooks: sortedBooks,
    groupedBooks,
    setGroupedBooks,
  };
}

export default useSectorization;
