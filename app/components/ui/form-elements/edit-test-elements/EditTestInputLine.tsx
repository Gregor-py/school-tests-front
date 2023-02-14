import {
  EditTestInputLine
} from '@/ui/form-elements/edit-test-elements/edit-test.types'
import classNames from 'classnames'
import { FC, useState } from 'react'
import styles from './EditTest.module.scss'

const EditTestInputLine: FC<EditTestInputLine> = ({
  value,
  onChange,
  line,
  className = '',
  sizeType = 'h3'
}) => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <div
      className={classNames(
        styles.EditTestInput,
        { line: line, active: isFocus },
        isFocus ? styles.EditTestInputActive : '',
        styles[sizeType],
        className
      )}
    >
      <input
        type={'text'}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </div>
  )
}

export default EditTestInputLine
