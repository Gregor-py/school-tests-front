import { ReactNode } from 'react';

export interface ISeo {
  title: string;
  description?: string;
  children: ReactNode;
}
