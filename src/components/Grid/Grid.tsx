import './GridStyle.css';
import { ContainerProps, RowProps, ColProps } from './Interfaces';

const Container: React.FC<ContainerProps> = ({ children, width = '85%' }) => {
  const containerStyle: React.CSSProperties = {
    width: width,
    margin: '0 auto',
  };

  return (
    <div className="container" style={containerStyle}>
      {children}
    </div>
  );
};

const Row: React.FC<RowProps> = ({ children }) => {
  return <div className="row">{children}</div>;
};

const Col: React.FC<ColProps> = ({ size = 12, children }) => {
  return <div className={`col-${size}`}>{children}</div>;
};

export { Container, Row, Col };
