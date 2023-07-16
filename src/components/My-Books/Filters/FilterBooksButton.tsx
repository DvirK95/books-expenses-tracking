import { FilterBooksButtonProps } from './hooks/interfaces';
function FilterBooksButton({ filterButton }: FilterBooksButtonProps) {
  return (
    <div className="btn-wrapper-center">
      <button className="btn btn-filter">{filterButton.name}</button>
    </div>
  );
}

export default FilterBooksButton;
