import { useSelector } from 'react-redux';
import Card from '../../Cards/Card';
import { Col, Row } from '../../Grid/Grid';
import { RootState } from '../../../store/store';
import Dropdown from '../../Dropdown/Dropdown';
import './BookExpenses.css';

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
                <Col size={3}>
                  <div className="book-details">{book.name}</div>
                </Col>
                <Col size={3}>
                  <div className="book-details">{book.author}</div>
                </Col>
                <Col size={3}>
                  {' '}
                  <div className="book-details">
                    {book.purchaseDate.toISOString().split('T')[0] || ''}
                  </div>
                </Col>
                <Col size={3}>
                  {' '}
                  <div className="book-details">${book.price.toFixed(2)}</div>
                </Col>
              </Row>
            </Col>
            <Col size={1}>
              <Row>
                <Dropdown
                  trigger={
                    <div className="btn-wrapper-center">
                      <button>V</button>
                    </div>
                  }
                  menu={[
                    <Card>
                      <button className="card-btn">edit</button>
                      <button className="card-btn">remove</button>
                    </Card>,
                  ]}
                />
              </Row>
            </Col>
          </Row>
        </Card.Body>
      ))}
    </Card>
  );
}
export default BookExpenses;
