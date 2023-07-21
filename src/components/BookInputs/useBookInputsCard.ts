import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../../store/book-actions';
import Book from '../../models/book-model';
import { AppDispatch, RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export interface BookInputsCardProp {
  edit: boolean;
  toggleModal?: () => void;
}

export function useInputsCard({ edit, toggleModal }: BookInputsCardProp) {
  const book = useSelector((state: RootState) => state.book.currentBookModal);

  const [bookName, setBookName] = useState<string>(
    edit && book ? book.name : ''
  );
  const [author, setAuthor] = useState<string>(edit && book ? book.author : '');

  const [purchaseDate, setPurchaseDate] = useState<string>(
    edit && book ? book.purchaseDate : ''
  );

  const [price, setPrice] = useState<string>(
    edit && book ? String(book.price) : ''
  );

  interface alertScreenType {
    isAlert: boolean;
    alertType: string;
    alertMessage: string;
  }

  const [alertScreen, setAlertScreen] = useState<alertScreenType>({
    isAlert: false,
    alertType: 'error',
    alertMessage: '',
  });

  const dispatch: AppDispatch = useDispatch();

  const onChangeHandler = (date: Date) => {
    if (date === null || date === undefined) {
      setPurchaseDate('');
    }
    setPurchaseDate(date.toISOString());
  };

  const handleSave = () => {
    if (!bookName || !author || !purchaseDate || !price) {
      setAlertScreen({
        isAlert: true,
        alertType: 'error',
        alertMessage: 'Please fill in all fields.',
      });
      return;
    }

    // Check if price is a valid number
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
      setAlertScreen({
        isAlert: true,
        alertType: 'error',
        alertMessage: 'Please enter a valid price.',
      });
      return;
    }
    const updatedBookObj: Book = {
      id: book ? book.id : 0,
      name: bookName,
      author,
      purchaseDate: purchaseDate,
      price: parsedPrice,
    };
    //  edit or add
    if (edit) {
      dispatch(updateBook(updatedBookObj));
      toggleModal && toggleModal();
    } else {
      dispatch(addBook(updatedBookObj));
      setAlertScreen({
        isAlert: true,
        alertType: 'success',
        alertMessage: `${bookName} successfully added`,
      });
      setBookName('');
      setAuthor('');
      setPurchaseDate('');
      setPrice('');
    }
  };

  return {
    bookName,
    setBookName,
    author,
    setAuthor,
    purchaseDate,
    price,
    setPrice,
    handleSave,
    alertScreen,
    onChangeHandler,
  };
}
