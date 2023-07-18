import { ToggleDropDownProps } from './interfaces';

export default function useDropdown({
  toggleDropdown,
  index,
  toggleModal,
}: ToggleDropDownProps) {
  const handleClickEdit = () => {
    toggleDropdown(index);
    toggleModal();
  };

  return {
    handleClickEdit,
  };
}
