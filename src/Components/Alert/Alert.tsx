import './Alert.css';
import React, { MouseEvent } from 'react';
import { AlertProps } from './Interfaces';
export default function Alert({
  children,
  type,
  message,
  isShow,
  setIsShow,
}: AlertProps) {
  const renderElAlert = function () {
    return React.cloneElement(children as React.ReactElement);
  };

  const handleClose = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <div className={`alert ${type}${!isShow ? ' hide' : ''}`}>
      <span className="closebtn" onClick={handleClose}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  );
}
