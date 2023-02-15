import {
  EditTestTextarea
} from '@/ui/form-elements/edit-test-elements/edit-test.types'
import classNames from 'classnames'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import styles from './EditTest.module.scss'

const EditTestTextarea: FC<EditTestTextarea> = ({
  value,
  onChange,
  line,
  className = '',
  isActive
}) => {
  const [isFocus, setIsFocus] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [])

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.style.height = `${event.target.scrollHeight}px`
    onChange(event)
  }
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
        ref={textareaRef}
        rows={1}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      ></textarea>
    </div>
  )
}

export default EditTestTextarea
