import React, { useState } from 'react';

type DropdownProps = {
  children: React.ReactNode;
};

interface DropdownComponent extends React.FC<DropdownProps> {
  Toggle: React.FC<DropdownToggleProps>;
  Menu: React.FC<DropdownMenuProps>;
}

const Dropdown: DropdownComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={handleToggle}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type === DropdownToggle) {
              return React.cloneElement(child, { onClick: handleToggle } as DropdownToggleProps); // Cast to DropdownToggleProps
            }
          }
          return null;
        })}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              if (child.type === DropdownMenu) {
                return React.cloneElement(child, { isOpen } as DropdownMenuProps); // Cast to DropdownMenuProps
              }
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

type DropdownToggleProps = {
  id: string;
  onClick: () => void;
  children: React.ReactNode;
};

const DropdownToggle: React.FC<DropdownToggleProps> = ({ id, onClick, children }) => {
  return (
    <button type="button" id={id} onClick={onClick}>
      {children}
    </button>
  );
};

type DropdownMenuProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, children }) => {
  return isOpen ? <div className="dropdown-menu">{children}</div> : null;
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;

export default Dropdown;
