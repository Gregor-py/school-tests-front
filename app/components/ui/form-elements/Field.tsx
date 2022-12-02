import { FC, forwardRef } from 'react';
import { IField } from '@/ui/form-elements/field.interface';
import styles from './Field.module.scss';
import { MaterialIcon } from '@/ui/icons/MaterialIcon';
import classNames from 'classnames';

const Field = forwardRef<HTMLInputElement, IField>(
  ({ className, placeholder, error, type = 'text', icon, ...rest }, ref) => {
    return (
      <div className={classNames(styles.field, className)}>
        <label>
          <span className={styles.placeholder}>{placeholder}</span>
          <div className={styles.input}>
            <div>
              <MaterialIcon name={icon} />
            </div>
            <input placeholder={placeholder} type={type} {...rest} ref={ref} />
          </div>
        </label>
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  }
);

Field.displayName = 'Field';

export default Field;
