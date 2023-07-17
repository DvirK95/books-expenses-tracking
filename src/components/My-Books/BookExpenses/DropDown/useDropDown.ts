import { useState } from 'react';

function useDropDown() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, handleModalOpen, handleModalClose };
}

export default useDropDown;
