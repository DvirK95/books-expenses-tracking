import './BookInputsCard.css';
import { useInputsCard } from './useBookInputsCard';
import { BookInputsCardProp } from './useBookInputsCard';

function BookInputsCard({ close }: BookInputsCardProp) {
  const {
    isClicked,
    handleClickDate,
    bookName,
    setBookName,
    author,
    setAuthor,
    price,
    setPrice,
    handleSave,
    setPurchaseDate,
  } = useInputsCard();

  return (
    <>
      <input
        className="book-inputs-field"
        type="text"
        id="name"
        name="name"
        placeholder="Book_name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <input
        className="book-inputs-field"
        type="text"
        placeholder="Book_author"
        id="author"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button className="book-inputs-field" onClick={handleClickDate}>
        {isClicked ? (
          <input
            className="date-input"
            type="date"
            id="date"
            name="date"
            onChange={(e) => setPurchaseDate(new Date(e.target.value))}
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
