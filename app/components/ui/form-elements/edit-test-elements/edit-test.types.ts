import { ChangeEvent } from 'react';

export interface EditTestInput {
  value: string;
  isActive?: boolean;
  className?: string;
  line?: boolean;
}
export interface EditTestInputLine extends EditTestInput {
  sizeType?: 'h3' | 'h2' | 'h1';
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface EditTestTextarea extends EditTestInput {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
