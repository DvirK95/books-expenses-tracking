import Book from '../models/book-model';
import { bookActions } from './book-slice';
import { AppDispatch } from './store';

export function removeBook(id: number) {
  return function (dispatch: AppDispatch) {
    dispatch(bookActions.removeBook(id));
    dispatch(bookActions.pullTotalPrice());
  };
}
export function addBook(book: Book) {
  return function (dispatch: AppDispatch) {
    dispatch(bookActions.addBook(book));
    dispatch(bookActions.pullTotalPrice());
  };
}

export function updateBook(book: Book) {
  return function (dispatch: AppDispatch) {
    dispatch(bookActions.updateBook(book));
    dispatch(bookActions.pullTotalPrice());
  };
}
