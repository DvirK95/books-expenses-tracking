import Card from '../../../Cards/Card';
import { ToggleDropDownProps } from './interfaces';
import useDropdown from './useDropdown';
function Dropdown({
  toggleDropdown,
  index,
  book,
  toggleModal,
}: ToggleDropDownProps) {
  const { handleClickEdit, handleClickRemove } = useDropdown({
    toggleDropdown,
    index,
    toggleModal,
    book,
  });

  return (
    <div className="dropdown-card">
      <Card>
        <button className="card-btn" onClick={handleClickEdit}>
          Edit
        </button>
        <button className="card-btn" onClick={handleClickRemove}>
          Remove
        </button>
      </Card>
    </div>
  );
}

export default Dropdown;
