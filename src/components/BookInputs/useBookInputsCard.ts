import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookActions } from '../../store/book-slice';
import { useNavigate } from 'react-router-dom';

export interface BookInputsCardProp {
  close?: () => void;
}

export function useInputsCard({ close }: BookInputsCardProp = {}) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [bookName, setBookName] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [purchaseDate, setPurchaseDate] = useState<Date>(new Date());
  const [price, setPrice] = useState<string>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    dispatch(
      bookActions.addBook({
        id: 4,
        name: bookName,
        author,
        purchaseDate: purchaseDate as Date,
        price: parsedPrice,
      })
    );

    if (close) {
      close();
    }
    navigate('/');
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
