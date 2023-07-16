import './Card.css';
import React from 'react';

interface MainCardProps {
  children: React.ReactNode;
}

const Card: React.FC<MainCardProps> & { Body: React.FC<MainCardProps> } = ({ children }) => {
  return <div className="main-card">{children}</div>;
};

const CardBody: React.FC<MainCardProps> = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

Card.Body = CardBody;

export default  Card;
