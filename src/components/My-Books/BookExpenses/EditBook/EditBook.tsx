import Modal from '../../../Modal/Modal';
import Card from '../../../Cards/Card';
import { Container } from '../../../Grid/Grid';
import BookInputsCard from '../../../BookInputs/BookInputsCard';
import { EditBookProps } from './EditBookPropInterface';

function EditBook({ isModalOpen, toggleModal, book }: EditBookProps) {
  return (
    <Modal isOpen={isModalOpen} toggle={toggleModal}>
      <Card>
        <h2 className="title-edit-book">Edit Book</h2>
        <Container width="45rem">
          <BookInputsCard book={book} />
        </Container>
      </Card>
    </Modal>
  );
}
export default EditBook;
