import { useState } from 'react';
import Book from '../../../models/book-model';

function useBookExpenses(initialState: boolean[]) {
  const [dropdownStates, setDropdownStates] = useState<boolean[]>(initialState);
  const [currentBook, setCurentBook] = useState<Book>();
  const toggleDropdown = (index: number) => {
    setDropdownStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return { dropdownStates, toggleDropdown, toggleModal, isModalOpen };
}

export default useBookExpenses;
