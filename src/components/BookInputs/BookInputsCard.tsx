import Card from '../Cards/Card';
import { Container } from '../Grid/Grid';
import useFilterBooks from '../My-Books/Filters/hooks/useFilterBooks';
import './BookInputsCard.css';

interface BookInputsCardProp {
  close?: () => void;
}

function BookInputsCard({ close }: BookInputsCardProp) {
  const { filterButtons } = useFilterBooks();

  return (
    <>
      {filterButtons.map((field) => (
        <button className="card-btn" key={field.name}>
          {field.name}
        </button>
      ))}
      <div className="btn-wrapper-center">
        <button className="btn btn-save" onClick={close}>
          Save
        </button>
      </div>
    </>
  );
}
export default BookInputsCard;
