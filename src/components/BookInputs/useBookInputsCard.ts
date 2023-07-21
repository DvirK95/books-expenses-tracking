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

  const [isNotification, setIsNotification] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<string>('');
  const [alertMessage, setAlertMessage] = useState<string>('');

  const dispatch: AppDispatch = useDispatch();

  const onChangeHandler = (date: Date) => {
    if (date) setPurchaseDate(date.toISOString());
  };

  const handleSave = () => {
    // reset alert notification
    setIsNotification(false);
    setAlertType('');
    setAlertMessage('');

    if (!bookName || !author || !purchaseDate || !price) {
      setIsNotification(true);
      setAlertType('error');
      setAlertMessage('Please fill in all fields.');
      return;
    }

    // Check if price is a valid number
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
      setIsNotification(true);
      setAlertType('error');
      setAlertMessage('Please enter a valid price.');
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

      setIsNotification(true);
      setAlertType('success');
      setAlertMessage(`${bookName} successfully added`);

      // clean after submit
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
    setIsNotification,
    isNotification,
    alertMessage,
    alertType,
    onChangeHandler,
  };
}
