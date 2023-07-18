import { useState } from 'react';

function useBookExpenses(initialState: boolean[]) {
  const [dropdownStates, setDropdownStates] = useState<boolean[]>(initialState);

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
