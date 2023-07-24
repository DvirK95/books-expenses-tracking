import Card from '../../Components/Cards/Card';
import BookInputsCard from '../../Components/BookInputs/BookInputsCard';
import { Container } from '../../Components/Grid/Grid';
function AddBook() {
  return (
    <Container width="45rem">
      <h1 className="page-title">Add Book</h1>
      <Card>
        <br />
        <Container width="93%">
          <BookInputsCard edit={false} />
        </Container>
      </Card>
    </Container>
  );
}
export default AddBook;
