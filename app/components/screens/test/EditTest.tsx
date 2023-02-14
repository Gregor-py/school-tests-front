import { ChangeEvent, FC, useState } from 'react'
import EditTestHead from './EditTestHead'

const EditTest: FC<{ testId: string }> = ({ testId }) => {
  const [text, setText] = useState('input text')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }
  return (
    <div className='py-4'>
      <EditTestHead testId={testId} />
    </div>
  )
}

export default EditTest
