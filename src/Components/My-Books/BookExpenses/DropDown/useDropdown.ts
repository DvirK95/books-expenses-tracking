import { ToggleDropDownProps } from './interfaces';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../../store/book-actions';
import { AppDispatch } from '../../../../store/store';
import { bookActions } from '../../../../store/book-slice';

export default function useDropdown({
  toggleDropdown,
  index,
  toggleModal,
  book,
}: ToggleDropDownProps) {
  const dispatch: AppDispatch = useDispatch();

  const handleClickEdit = () => {
    toggleDropdown(index);
    // set property to the modal
    dispatch(bookActions.setCurrentBookModal(book));
    toggleModal();
  };

  const handleClickRemove = () => {
    dispatch(removeBook(book.id));
    toggleDropdown(index);
  };

  return {
    handleClickEdit,
    handleClickRemove,
  };
}
