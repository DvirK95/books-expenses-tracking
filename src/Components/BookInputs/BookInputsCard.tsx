import { isoStrToDateStr } from '../../Assets/formatDate';
import Alert from '../Alert/Alert';
import './BookInputsCard.css';
import { useInputsCard } from './useBookInputsCard';
import { BookInputsCardProp } from './useBookInputsCard';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookInputsCard({ edit, toggleModal }: BookInputsCardProp) {
  const {
    bookName,
    setBookName,
    author,
    setAuthor,
    purchaseDate,
    price,
    setPrice,
    handleSave,
    setIsNotification,
    isNotification,
    alertMessage,
    alertType,
    onChangeHandler,
  } = useInputsCard({ edit, toggleModal });

  return (
    <>
      <input
        className={`book-inputs-field${
          alertType === 'error' && !bookName ? ' error' : ''
        }`}
        type="text"
        id="name"
        name="name"
        placeholder="Book_name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <input
        className={`book-inputs-field${
          alertType === 'error' && !author ? ' error' : ''
        }`}
        type="text"
        placeholder="Book_author"
        id="author"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <DatePicker
        placeholderText="Purchase_date"
        className={`book-inputs-field${
          alertType === 'error' && !purchaseDate ? ' error' : ''
        }${edit ? ' book-inputs-field-edit' : ''}`}
        selected={edit ? new Date(purchaseDate) : new Date()}
        value={isoStrToDateStr(purchaseDate)}
        onChange={onChangeHandler}
        minDate={new Date('2000-01-01')}
        maxDate={new Date()}
        dateFormat="dd/MM/yyyy"
      />
      <input
        className={`book-inputs-field${
          alertType === 'error' && !price ? ' error' : ''
        }`}
        placeholder="price"
        type="number"
        id="price"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <div className="btn-wrapper-center">
        <button className="btn btn-save" onClick={handleSave}>
          Save
        </button>
      </div>
      <Alert
        type={alertType}
        isShow={isNotification}
        setIsShow={setIsNotification}
      >
        <p>{alertMessage}</p>
      </Alert>
    </>
  );
}
export default BookInputsCard;
