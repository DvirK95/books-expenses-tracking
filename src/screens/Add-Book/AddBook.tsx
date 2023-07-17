import Card from '../../components/Cards/Card';
import BookInputsCard from '../../components/BookInputs/BookInputsCard';
import { Container } from '../../components/Grid/Grid';
function AddBook() {
  return (
    <Container width="45rem">
      <h1 className="page-title">Add Book</h1>
      <Card>
        <br />
        <Container width="93%">
          <BookInputsCard />
        </Container>
      </Card>
    </Container>
  );
}
export default AddBook;
