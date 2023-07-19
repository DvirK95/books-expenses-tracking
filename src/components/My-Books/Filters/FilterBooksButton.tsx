import { Col, Row } from '../../Grid/Grid';
import { FilterBooksProps } from './hooks/interfaces';
function FilterBooksButton(prop: FilterBooksProps) {
  const {filters, onBookNameChange, onAuthorChange, onPurchaseDateChange, onPriceChange} = prop
  return (
    <Row>
        <Col size={3}>
          <div className="btn-wrapper-center">
            <input
              className='filter-input'
              type="text"
              placeholder="Book_name"
              value={filters.bookName}
              onChange={onBookNameChange}
            />
          </div>
         
        </Col>
        <Col size={3}>
          <div className="btn-wrapper-center">
            <input
              className='filter-input'
              type="text"
              placeholder="name_author"
              value={filters.author}
              onChange={onAuthorChange}
            />
          </div>
        </Col>
        <Col size={3}>
          <div className="btn-wrapper-center">
            <input
              className='filter-input'
              type="text"
              placeholder="Purchase_date"
              value={filters.purchaseDate}
              onChange={onPurchaseDateChange}
            />
          </div>
        </Col>
        <Col size={3}>
          <div className="btn-wrapper-center">
            <input
              className='filter-input'
              type="text"
              placeholder="Price"
              value={filters.price}
              onChange={onPriceChange}
            />
          </div>
        </Col>
      </Row>
  );
}

export default FilterBooksButton;
