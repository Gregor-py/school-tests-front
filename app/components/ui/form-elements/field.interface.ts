import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { TypeMaterialIconName } from '@/shared/types/icons.types';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface InputPropsField {
  placeholder: string;
  error?: FieldError | undefined;
  icon: TypeMaterialIconName;
  className?: string | undefined;
}
type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> &
  InputPropsField;

export interface IField extends TypeInputPropsField {}
