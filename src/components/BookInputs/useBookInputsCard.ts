import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../../store/book-actions';
import Book from '../../models/book-model';
import { AppDispatch, RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export interface BookInputsCardProp {
  close?: () => void;
  edit: boolean;
}

export function useInputsCard({ close, edit }: BookInputsCardProp) {
  const book = useSelector((state: RootState) => state.book.currentBookModal);

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [bookName, setBookName] = useState<string>(
    edit && book ? book.name : 'Book_name'
  );
  const [author, setAuthor] = useState<string>(
    edit && book ? book.author : 'Book_author'
  );
  const [purchaseDate, setPurchaseDate] = useState<Date | null>(
    edit && book ? book.purchaseDate : new Date()
  );

  const [price, setPrice] = useState<string>(
    edit && book ? String(book.price) : ''
  );
  const dispatch: AppDispatch = useDispatch();

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
      dispatch(updateBook(updatedBookObj));
    } else {
      dispatch(addBook(updatedBookObj));
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
