import {  useSelector } from 'react-redux';
import Card from '../../Cards/Card';
import { Col, Row } from '../../Grid/Grid';
import { RootState } from '../../../store/store';

function BookExpenses() {
  const BooksArr = useSelector((state: RootState) => state.book.books);

  return (
    <Card>
      <div>Purchase Date</div>
      <Card.Body>{BooksArr.map((book) => (
        <Row key={book.id}>
          <Col>{book.name}</Col>
        </Row>
      ))}</Card.Body>
    </Card>
  );
}
export default BookExpenses;
