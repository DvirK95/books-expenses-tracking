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

  return { dropdownStates, toggleDropdown };
}

export default useBookExpenses;
