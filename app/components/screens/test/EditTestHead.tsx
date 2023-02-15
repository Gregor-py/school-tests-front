import EditTestBlock from '@/components/ui/form-elements/edit-test-elements/EditTestBlock'
import { useDebouncedMutation } from '@/hooks/useDebouncedMutation'
import EditTestInputLine from '@/ui/form-elements/edit-test-elements/EditTestInputLine'
import EditTestTextarea from '@/ui/form-elements/edit-test-elements/EditTestTextarea'
import { ChangeEvent, FC, useState } from 'react'
import { useEditTestHead } from './useEditTestHead'

const EditTestHead: FC<{ testId: string }> = ({ testId }) => {
  const [titleInput, setTitleInput] = useState('Title')
  const [descriptionInput, setDescriptionInput] = useState('Description')
  const { changeDescription, changeTitle } = useEditTestHead()

  useDebouncedMutation(() => changeTitle({ newTitle: titleInput, testId }), 600, titleInput)
  useDebouncedMutation(() => changeDescription({ description: descriptionInput, testId }), 600, descriptionInput)

  return (
    <EditTestBlock>
      <EditTestInputLine
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setTitleInput(event.target.value)
        }}
        value={titleInput}
        sizeType="h1"
      />
      <EditTestTextarea
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setDescriptionInput(event.target.value)
        }
        value={descriptionInput}
      />
    </EditTestBlock>
  )
}

export default EditTestHead
