import { Col, Container, Row } from '../../Components/Grid/Grid';
import './TotalExpneses.css';
import useTotalExpeneses from './useTotalExpenses';

function TotalExpenses() {
  const { totalBooks, totalPrice } = useTotalExpeneses();
  const fontStyle = 'total-expenses-font';
  return (
    <Container width="50rem">
      <h1 className="page-title">Total Expenses</h1>
      <div className="total-expenses-wrapper">
        <Row className="total-row">
          <Col size={6}>
            <div className={fontStyle}>Total Books:</div>
          </Col>
          <Col size={6}>
            <div className={fontStyle}>{totalBooks}</div>
          </Col>
        </Row>
        <Row className="total-row">
          <Col size={6}>
            <div className={fontStyle}>Total Expenses:</div>
          </Col>
          <Col size={6}>
            <div className={fontStyle}>{totalPrice.toFixed(2)}$</div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default TotalExpenses;
