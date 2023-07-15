import { ReactNode } from 'react';

export interface ContainerProps {
  children?: ReactNode;
  width?: string; // Optional prop for custom width
}

export interface RowProps {
  children?: ReactNode;
}

export interface ColProps {
  size?: number;
  children?: ReactNode;
}
