import './BookInputsCard.css';
import { useInputsCard } from './useBookInputsCard';
import { BookInputsCardProp } from './useBookInputsCard';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookInputsCard({ close, book }: BookInputsCardProp) {
  const {
    isClicked,
    handleClickDate,
    bookName,
    setBookName,
    author,
    setAuthor,
    purchaseDate,
    price,
    setPrice,
    handleSave,
    setPurchaseDate,
  } = useInputsCard({ book });

  return (
    <>
      <input
        className="book-inputs-field"
        type="text"
        id="name"
        name="name"
        placeholder={bookName}
        value={book && bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <input
        className="book-inputs-field"
        type="text"
        placeholder={author}
        id="author"
        name="author"
        value={book && author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button className="book-inputs-field" onClick={handleClickDate}>
        {isClicked || book ? (
          <DatePicker
            className="date-input"
            selected={purchaseDate}
            onChange={(date) => setPurchaseDate(date)}
            minDate={new Date('1900-12-31')}
            maxDate={new Date()}
            dateFormat="dd/MM/yyyy"
          />
        ) : (
          <>Purchase_Date</>
        )}
      </button>
      <input
        className="book-inputs-field"
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
    </>
  );
}
export default BookInputsCard;
