import BookExpenses from '../../components/My-Books/BookExpenses/BookExpenses';
import FilterBooks from '../../components/My-Books/Filters/FilterBooks';
import { Container } from '../../components/Grid/Grid';
function MyBooks() {
  return (
    <>
      <h1 className="page-title">My Books</h1>
      <Container>
        <FilterBooks />
      </Container>
      <BookExpenses />
    </>
  );
}
export default MyBooks;
