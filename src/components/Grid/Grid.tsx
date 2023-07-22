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

const Row: React.FC<RowProps> = ({
  children,
  maxHeight,
  margin = '0.25rem 0',
  className,
}) => {
  const rowStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    margin,
    maxHeight: maxHeight || 'none',
  };

  return (
    <div className={!className ? 'row' : `row ${className}`} style={rowStyle}>
      {children}
    </div>
  );
};

const Col: React.FC<ColProps> = ({ size = 12, maxHeight, children }) => {
  const colStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    maxHeight: maxHeight || `calc(100% / ${size})`,
  };

  return (
    <div className={`col-${size}`} style={colStyle}>
      {children}
    </div>
  );
};

export { Container, Row, Col };
