import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookActions } from '../../store/book-slice';
import Book from '../../models/book-model';

export interface BookInputsCardProp {
  close?: () => void;
  book?: Book;
}

export function useInputsCard({ close, book }: BookInputsCardProp) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [bookName, setBookName] = useState<string>(
    book ? book.name : 'Book_name'
  );
  const [author, setAuthor] = useState<string>(
    book ? book.author : 'Book_author'
  );
  const [purchaseDate, setPurchaseDate] = useState<Date | null>(
    book ? book.purchaseDate : new Date()
  );

  const [price, setPrice] = useState<string>(book ? String(book.price) : '');
  const dispatch = useDispatch();

  const handleClickDate = () => {
    setIsClicked(true);
  };

  const handleSave = () => {
    if (!bookName || !author || !purchaseDate || !price) {
      alert('Please fill in all fields.');

      return;
    }

    // Check if price is a valid number
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
      alert('Please enter a valid price.');
      return;
    }
    const updatedBookObj: Book = {
      id: 4,
      name: bookName,
      author,
      purchaseDate: purchaseDate,
      price: parsedPrice,
    };
    //  edit or update
    if (book) {
      dispatch(bookActions.updateBook(updatedBookObj));
    } else {
      dispatch(bookActions.addBook(updatedBookObj));
      alert(`${bookName} successfully added`);
    }
  };

  return {
    isClicked,
    handleClickDate,
    bookName,
    setBookName,
    author,
    setAuthor,
    purchaseDate,
    setPurchaseDate,
    price,
    setPrice,
    handleSave,
  };
}
