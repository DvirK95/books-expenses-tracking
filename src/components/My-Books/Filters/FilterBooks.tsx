import './FilterBooks.css';
import Card from '../../Cards/Card';
import { Col, Row } from '../../Grid/Grid';
import useFilterBooks from './hooks/useFilterBooks';
import FilterBooksButton from './FilterBooksButton';

function FilterBooks() {
  const { filterButtons } = useFilterBooks();
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
      <Row>
        {filterButtons.map((filterButton) => (
          <Col size={3} key={filterButton.name}>
            <FilterBooksButton filterButton={filterButton} />
          </Col>
        ))}
      </Row>
    </Card>
  );
}
export default FilterBooks;
