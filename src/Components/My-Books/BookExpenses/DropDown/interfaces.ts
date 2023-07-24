import Book from '../../../../Models/book-model';

export interface ToggleDropDownProps {
  book: Book;
  toggleDropdown: (index: number) => void;
  index: number;
  toggleModal: () => void;
}
