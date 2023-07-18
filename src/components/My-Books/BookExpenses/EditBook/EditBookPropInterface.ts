import Book from '../../../../models/book-model';
export interface EditBookProps {
  toggleModal: () => void;
  index: number;
  isModalOpen: boolean;
  book: Book;
}
