import FilterBooks from '../../components/My-Books/FilterBooks';
import { Container } from '../../components/Grid/Grid';
function MyBooks() {
  return (
    <>
      <h1 className="page-title">My Books</h1>
      <Container>
        <FilterBooks />
      </Container>
    </>
  );
}
export default MyBooks;
