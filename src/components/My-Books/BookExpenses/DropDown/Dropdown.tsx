import Card from '../../../Cards/Card';
import Modal from '../../../Modal/Modal';
import BookInputsCard from '../../../BookInputs/BookInputsCard';
import useDropDown from './useDropDown';

function Dropdown() {
  const { handleModalOpen, isModalOpen, handleModalClose } = useDropDown();

  return (
    <div className="dropdown-card">
      <Card>
        <button className="card-btn" onClick={handleModalOpen}>
          Edit
        </button>
        <button className="card-btn">Remove</button>
      </Card>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <Card>
          <h2 className="title-edit-book">Edit Book</h2>
          <BookInputsCard close={handleModalClose} />
        </Card>
      </Modal>
    </div>
  );
}

export default Dropdown;
