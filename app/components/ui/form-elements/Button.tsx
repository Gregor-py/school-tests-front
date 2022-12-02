import { FC } from 'react';
import { IButton } from '@/ui/form-elements/field.interface';
import classNames from 'classnames';
import styles from './Field.module.scss';

const Button: FC<IButton> = ({ className, children, ...rest }) => {
  return (
    <button className={classNames(className, styles.button)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
