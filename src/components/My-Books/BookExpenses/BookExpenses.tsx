import { useSelector } from 'react-redux';
import Card from '../../Cards/Card';
import { Col, Row } from '../../Grid/Grid';
import { RootState } from '../../../store/store';
import { ReactComponent as AngeleUpIcon } from '../../../assets/icons/angle-up-solid.svg';
import { ReactComponent as AngeleDownIcon } from '../../../assets/icons/angle-down-solid.svg';
import useBookExpenses from './useBookExpenses';
import './BookExpenses.css';
import Dropdown from './DropDown/Dropdown';
import EditBook from './EditBook/EditBook';

function BookExpenses() {
  const booksArr = useSelector((state: RootState) => state.book.books);
  const { dropdownStates, toggleDropdown, toggleModal, isModalOpen } =
    useBookExpenses(booksArr.map(() => false));

  const iconStyle = {
    height: '2rem',
    width: '2rem',
  };

  return (
    <Card>
      <div>Purchase Date</div>
      {booksArr.map((book, index) => (
        <Card.Body key={book.id}>
          <Row>
            <Col size={11}>
              <Row>
                <Col size={3}>
                  <div className="book-details">{book.name}</div>
                </Col>
                <Col size={3}>
                  <div className="book-details">{book.author}</div>
                </Col>
                <Col size={3}>
                  <div className="book-details">
                    {book.purchaseDate.toISOString().split('T')[0] || ''}
                  </div>
                </Col>
                <Col size={3}>
                  <div className="book-details">${book.price.toFixed(2)}</div>
                </Col>
              </Row>
            </Col>
            <Col size={1}>
              <Row maxHeight="1rem">
                <div className="btn-wrapper-center">
                  <button
                    className="btn-opacity"
                    onClick={() => toggleDropdown(index)}
                  >
                    {dropdownStates[index] ? (
                      <AngeleUpIcon style={iconStyle} />
                    ) : (
                      <AngeleDownIcon style={iconStyle} />
                    )}
                  </button>
                </div>
                {dropdownStates[index] && (
                  <Dropdown
                    toggleDropdown={toggleDropdown}
                    index={index}
                    toggleModal={toggleModal}
                    book={book}
                  />
                )}
                <EditBook
                  isModalOpen={isModalOpen}
                  toggleModal={toggleModal}
                  book={book}
                  index={index}
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
