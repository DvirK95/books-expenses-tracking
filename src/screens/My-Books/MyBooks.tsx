import { useEffect } from 'react';
import FilterBooks from '../../components/My-Books/Filters/FilterBooks';
import BookExpenses from '../../components/My-Books/BookExpenses/BookExpenses';
import { Container } from '../../components/Grid/Grid';
import useMyBooks from './useMyBooks';
import Book from '../../models/book-model';
import { useState } from 'react';

function MyBooks() {
  const {
    allBooks,
    filters,
    setFilters,
    filteredBooks,
    setFilteredBooks,
    handleClear,
  } = useMyBooks();
  
  // State to hold the grouped books
  const [groupedBooks, setGroupedBooks] = useState<{ [key: string]: Book[] }>(
    {}
  );

  useEffect(() => {
    // Filtering books
    const filtered = allBooks.filter((book: Book) => {
      return (
        book.name.toLowerCase().includes(filters.bookName.toLowerCase()) &&
        book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
        book.purchaseDate
          .toString()
          .toLowerCase()
          .includes(filters.purchaseDate.toLowerCase()) &&
        book.price.toString().includes(filters.price)
      );
    });
    setFilteredBooks(()=> filtered);
  }, [
    filters.bookName,
    filters.author,
    filters.purchaseDate,
    filters.price,
    allBooks,
    setFilteredBooks
  ]);

  useEffect(() => {
    // Grouping books by purchaseDate
    const groupedBooks: { [key: string]: Book[] } = {};
    filteredBooks.forEach((book: Book) => {
      const dateKey = book.purchaseDate.toISOString().slice(0, 10);
      if (!groupedBooks[dateKey]) {
        groupedBooks[dateKey] = [];
      }
      groupedBooks[dateKey].push(book);
    });
    setGroupedBooks(groupedBooks);
  }, [filteredBooks]);

  return (
    <>
      <h1 className="page-title">My Books</h1>
      <Container>
        <FilterBooks
          filters={filters}
          onBookNameChange={(event) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              bookName: event.target.value,
            }))
          }
          onAuthorChange={(event) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              author: event.target.value,
            }))
          }
          onPurchaseDateChange={(event) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              purchaseDate: event.target.value,
            }))
          }
          onPriceChange={(event) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              price: event.target.value,
            }))
          }
          handleClear={handleClear}
        />
      </Container>
      {Object.keys(groupedBooks).map((dateKey: string, index: number) => (
        <BookExpenses key={index} booksArr={groupedBooks[dateKey]} />
      ))}
    </>
  );
}

export default MyBooks;
