import './FilterBooks.css';
import MainCard from '../Cards/MainCard';
import { Col, Row } from '../Grid/Grid';
import useFilterBooks from './hooks/useFilterBooks';
import FilterBooksButton from './FilterBooksButton';

function FilterBooks() {
  const { filterButtons } = useFilterBooks();
  return (
    <MainCard>
      <Row>
        <Col size={4} />
        <Col size={4}>
          <div className="filter-title">Filter books</div>
        </Col>
        <Col size={2} />
        <Col size={2}>
          <div className="btn-clear-wrapper">
            <button className="btn btn-clear">Clean</button>
          </div>
        </Col>
      </Row>
      <Row>
        {filterButtons.map((filterButton) => (
          <Col size={3} key={filterButton.name}>
            <FilterBooksButton filterButton={filterButton} />
          </Col>
        ))}
      </Row>
    </MainCard>
  );
}
export default FilterBooks;
