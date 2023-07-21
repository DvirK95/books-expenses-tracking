import { isoStrToDateStr } from '../../../assets/formatDate';
import { Col, Row } from '../../Grid/Grid';
import { FilterBooksProps } from './FilterBooksinterfaces';
import DatePicker from 'react-datepicker';

function FilterBooksFields(prop: FilterBooksProps) {
  const {
    filters,
    onBookNameChange,
    onAuthorChange,
    onPurchaseDateChange,
    onPriceChange,
  } = prop;
  return (
    <Row>
      <Col size={3}>
        <div className="btn-wrapper-center">
          <input
            className="filter-input"
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
            className="filter-input"
            type="text"
            placeholder="name_author"
            value={filters.author}
            onChange={onAuthorChange}
          />
        </div>
      </Col>
      <Col size={3}>
        <div className="btn-wrapper-center">
          <DatePicker
            className="filter-input"
            placeholderText="Purchase_date"
            selected={
              filters.purchaseDate ? new Date(filters.purchaseDate) : new Date()
            }
            value={isoStrToDateStr(filters.purchaseDate)}
            onChange={onPurchaseDateChange}
            minDate={new Date('2000-01-01')}
            maxDate={new Date()}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </Col>
      <Col size={3}>
        <div className="btn-wrapper-center">
          <input
            className="filter-input"
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

export default FilterBooksFields;
