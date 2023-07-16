import { FilterBooksButtonProps } from './hooks/interfaces';
function FilterBooksButton({ filterButton }: FilterBooksButtonProps) {
  return (
    <div className="btn-filter-wrapper">
      <button className="btn btn-filter">{filterButton.name}</button>
    </div>
  );
}

export default FilterBooksButton;
