import React, { ReactElement, useState } from 'react';
import './Dropdown.css';

interface DropdownProps {
  trigger: ReactElement;
  menu: ReactElement[];
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, menu }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <div className="dropdown-menu">
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">
                {React.cloneElement(menuItem, {
                  onClick: () => {
                    if (menuItem.props.onClick) {
                      menuItem.props.onClick();
                    }
                    setOpen(false);
                  },
                })}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
