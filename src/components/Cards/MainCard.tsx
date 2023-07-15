import './MainCard.css';

interface MainCardProps {
  children: React.ReactNode;
}

const MainCard: React.FC<MainCardProps> = ({ children }) => {
  return <div className="main-card">{children}</div>;
};

export default MainCard;
