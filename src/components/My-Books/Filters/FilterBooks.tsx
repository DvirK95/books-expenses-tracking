import './FilterBooks.css';
import Card from '../../Cards/Card';
import { Col, Row } from '../../Grid/Grid';
import useFilterBooks from './hooks/useFilterBooks';
import FilterBooksButton from './FilterBooksButton';
import { FilterBooksProps } from './hooks/interfaces';

function FilterBooks(prop : FilterBooksProps) {
  //const { filterButtons } = useFilterBooks();
  return (
    <Card>
      <Row>
        <Col size={3} />
        <Col size={6}>
          <div className="filter-title">Filter books</div>
        </Col>

        <Col size={3}>
          <div className="btn-clear-wrapper">
            <button className="btn btn-clear">Clean</button>
          </div>
        </Col>
      </Row>
      <br />
        <FilterBooksButton filters={prop.filters}
          onBookNameChange={prop.onBookNameChange}
          onAuthorChange={prop.onAuthorChange}
          onPurchaseDateChange={prop.onPurchaseDateChange}
          onPriceChange={prop.onPriceChange}
          />
    </Card>
  );
}
export default FilterBooks;
