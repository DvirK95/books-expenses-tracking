interface MainCardProps {
  children: React.ReactNode;
}

const MainCard: React.FC<MainCardProps> = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

export default MainCard;
