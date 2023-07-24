import { ReactNode } from 'react';

export type AlertProps = {
  children?: ReactNode;
  type: string;
  message?: string;
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};
