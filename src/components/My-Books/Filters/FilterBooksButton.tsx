import { FilterBooksButtonProps } from './hooks/interfaces';
function FilterBooksButton({ filterButton }: FilterBooksButtonProps) {
  return (
    <div className="btn-wrapper-center">
      {/*<button className="btn btn-filter">{filterButton.name}</button>*/}
      <input type="text" placeholder={filterButton.name} />
    </div>
  );
}

export default FilterBooksButton;
