import { ReactNode } from 'react';

export interface ContainerProps {
  children?: ReactNode;
  width?: string;
}

export interface RowProps {
  children?: ReactNode;
  maxHeight?: string;
  className?: string;
}

export interface ColProps {
  size?: number;
  children?: ReactNode;
  maxHeight?: string;
}
