import { ToggleDropDownProps } from './interfaces';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../../store/book-actions';
import { AppDispatch } from '../../../../store/store';
export default function useDropdown({
  toggleDropdown,
  index,
  toggleModal,
  book,
}: ToggleDropDownProps) {
  const dispatch: AppDispatch = useDispatch();

  const handleClickEdit = () => {
    toggleDropdown(index);
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
