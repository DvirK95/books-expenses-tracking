import style from './style.module.css';
import css from 'classnames';
import React, { ReactNode, MouseEvent, useState } from 'react';

type AlertProps = {
  children?: ReactNode;
  type: string;
  message?: string;
};

export default function Alert({ children, type, message }: AlertProps) {
  const [isShow, setIsShow] = useState(true);

  const renderElAlert = function () {
    return React.cloneElement(children as React.ReactElement);
  };

  const handleClose = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <div className={css(style.alert, style[type], !isShow && style.hide)}>
      <span className={style.closebtn} onClick={handleClose}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  );
}
