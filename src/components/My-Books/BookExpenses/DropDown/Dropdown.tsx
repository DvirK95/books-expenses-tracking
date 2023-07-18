import Card from '../../../Cards/Card';
import { ToggleDropDownProps } from './interfaces';
import useDropdown from './useDropdown';
function Dropdown({ toggleDropdown, index, toggleModal }: ToggleDropDownProps) {
  const { handleClickEdit } = useDropdown({
    toggleDropdown,
    index,
    toggleModal,
  });

  return (
    <div className="dropdown-card">
      <Card>
        <button className="card-btn" onClick={handleClickEdit}>
          Edit
        </button>
        <button className="card-btn">Remove</button>
      </Card>
    </div>
  );
}

export default Dropdown;
