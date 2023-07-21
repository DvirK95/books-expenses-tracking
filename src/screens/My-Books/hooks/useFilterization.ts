import { useState } from 'react';
import Book from '../../../models/book-model';

function useFilterization() {
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
  const onPurchaseDateChange = (date: Date) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      purchaseDate: date.toISOString(),
    }));
  };

  return {
    filters,
    setFilters,
    filteredBooks,
    setFilteredBooks,
    handleClear,
    onPurchaseDateChange,
  };
}

export default useFilterization;
