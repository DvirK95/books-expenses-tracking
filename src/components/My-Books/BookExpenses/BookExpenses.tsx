import {  useSelector } from 'react-redux';
import Card from '../../Cards/Card';
import { Col, Row } from '../../Grid/Grid';
import { RootState } from '../../../store/store';
import './BookExpenses.css'

function BookExpenses() {
  const BooksArr = useSelector((state: RootState) => state.book.books);

  return (
    <Card>
      <div>Purchase Date</div>
      {BooksArr.map((book) => (
        <Card.Body>
          <Row key={book.id}>
            <Col size={11}>
              <Row>
                <Col size={3}>{book.name}</Col>
                <Col size={3}>{book.author}</Col>
                <Col size={3}>{book.purchaseDate.toISOString().split('T')[0] || ''}</Col>
                <Col size={3}>${book.price.toFixed(2)}</Col>
              </Row>
            </Col>
            <Col size={1}>
              <Row>
              <Col size={1}><button>+</button></Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>))}
    </Card>
  );
}
export default BookExpenses;
