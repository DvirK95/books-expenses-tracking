import './FilterBooks.css';
import Card from '../../Cards/Card';
import { Col, Row } from '../../Grid/Grid';
import FilterBooksFields from './FilterBooksFields';
import { FilterBooksProps } from './FilterBooksinterfaces';

function FilterBooks(prop: FilterBooksProps) {
  return (
    <Card>
      <Row>
        <Col size={3} />
        <Col size={6}>
          <div className="filter-title">Filter books</div>
        </Col>
        <Col size={3}>
          <div className="btn-clear-wrapper">
            <button className="btn btn-clear" onClick={prop.handleClear}>
              Clean
            </button>
          </div>
        </Col>
      </Row>
      <br />
      <FilterBooksFields
        filters={prop.filters}
        onBookNameChange={prop.onBookNameChange}
        onAuthorChange={prop.onAuthorChange}
        onPurchaseDateChange={prop.onPurchaseDateChange}
        onPriceChange={prop.onPriceChange}
      />
    </Card>
  );
}
export default FilterBooks;
