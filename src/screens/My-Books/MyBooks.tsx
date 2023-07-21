import { useEffect } from 'react';
import FilterBooks from '../../components/My-Books/Filters/FilterBooks';
import BookExpenses from '../../components/My-Books/BookExpenses/BookExpenses';
import { Container } from '../../components/Grid/Grid';
import useFilterization from './hooks/useFilterization';
import Book from '../../models/book-model';
import { isoStrToDateStr } from '../../assets/formatDate';
import useSectorization from './hooks/useSectorization';

function MyBooks() {
  const {
    filters,
    setFilters,
    filteredBooks,
    setFilteredBooks,
    handleClear,
    onPurchaseDateChange,
  } = useFilterization();

  const { allBooks, groupedBooks, setGroupedBooks } = useSectorization();

  useEffect(() => {
    // Filtering books
    const filtered = allBooks.filter((book: Book) => {
      return (
        book.name.toLowerCase().includes(filters.bookName.toLowerCase()) &&
        book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
        (!filters.purchaseDate
          ? true
          : isoStrToDateStr(book.purchaseDate) ===
            isoStrToDateStr(filters.purchaseDate)) &&
        (!filters.price ? true : ~~book.price === parseInt(filters.price))
      );
    });
    setFilteredBooks(() => filtered);
  }, [
    filters.bookName,
    filters.author,
    filters.purchaseDate,
    filters.price,
    allBooks,
    setFilteredBooks,
  ]);

  useEffect(() => {
    // Grouping books by purchaseDate
    const groupedBooks: { [key: string]: Book[] } = {};
    filteredBooks.forEach((book: Book) => {
      const dateKey = isoStrToDateStr(book.purchaseDate);
      if (!groupedBooks[dateKey]) {
        groupedBooks[dateKey] = [];
      }
      groupedBooks[dateKey].push(book);
    });
    setGroupedBooks(groupedBooks);
  }, [filteredBooks, setGroupedBooks]);

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
          onPurchaseDateChange={onPurchaseDateChange}
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
        <BookExpenses
          key={index}
          booksArr={groupedBooks[dateKey]}
          purchaseDate={dateKey}
        />
      ))}
    </>
  );
}

export default MyBooks;
