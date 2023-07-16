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
          <Col size={3}>{book.name}</Col>
          <Col size={3}>{book.author}</Col>
          <Col size={3}>{book.purchaseDate.toISOString().split('T')[0] || ''}</Col>
          <Col size={3}>{book.price}</Col>

        </Row>
      ))}</Card.Body>
    </Card>
  );
}
export default BookExpenses;
