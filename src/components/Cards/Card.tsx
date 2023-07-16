import './Card.css';

interface MainCardProps {
  children: React.ReactNode;
}

interface MainCardProps {
  children: React.ReactNode;
}

const MainCard: React.FC<MainCardProps> = ({ children }) => {
  return <div className="main-card">{children}</div>;
};

const CardBody: React.FC<MainCardProps> = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

export { MainCard, CardBody };
