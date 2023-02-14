import { ChangeEvent, FC, useState } from 'react';
import styles from './EditTest.module.scss';
import {
  EditTestInput,
  EditTestInputLine,
  EditTestTextarea
} from '@/ui/form-elements/edit-test-elements/edit-test.types';
import classNames from 'classnames';

const EditTestTextarea: FC<EditTestTextarea> = ({
  value,
  onChange,
  line,
  className = '',
  isActive
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.style.height = `${event.target.scrollHeight}px`;
    onChange(event);
  };
  return (
    <div
      className={classNames(
        styles.EditTestInput,
        { line: line, active: isActive },
        isFocus ? styles.EditTestInputActive : '',
        className
      )}
    >
      <textarea
        rows={1}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      ></textarea>
    </div>
  );
};

export default EditTestTextarea;
