import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Book from '../../models/book-model';
import FilterBooks from '../../components/My-Books/Filters/FilterBooks';
import BookExpenses from '../../components/My-Books/BookExpenses/BookExpenses';
import { Container } from '../../components/Grid/Grid';

function MyBooks() {
  const allBooks = useSelector((state: RootState) => state.book.books);
  const [filters, setFilters] = useState({
    bookName: '',
    author: '',
    purchaseDate: '',
    price: '',
  });
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    const filtered = allBooks.filter((book) => {
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
    setFilteredBooks(filtered);
  }, [allBooks, filters.bookName, filters.author, filters.purchaseDate, filters.price]);

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
        />
      </Container>
      <BookExpenses booksArr={filteredBooks} />
    </>
  );
}

export default MyBooks;
