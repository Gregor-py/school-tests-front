import Button from '@/components/ui/form-elements/Button'
import EditTestBlock from '@/components/ui/form-elements/edit-test-elements/EditTestBlock'
import EditTestInputLine from '@/ui/form-elements/edit-test-elements/EditTestInputLine'
import EditTestTextarea from '@/ui/form-elements/edit-test-elements/EditTestTextarea'
import { ChangeEvent, FC, useState } from 'react'
import { useEditTestHead } from './useEditTestHead'

const EditTestHead: FC<{ testId: string }> = ({ testId }) => {
  const [titleInput, setTitleInput] = useState('Title')
  const [descriptionInput, setDescriptionInput] = useState('Description')
  const { changeDescription, changeTitle } = useEditTestHead()

  return (
    <EditTestBlock>
      <EditTestInputLine
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setTitleInput(event.target.value)
        }
        value={titleInput}
        sizeType="h1"
      />
      <EditTestTextarea
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setDescriptionInput(event.target.value)
        }
        value={descriptionInput}
      />
      <Button onClick={() => { changeTitle({ newTitle: titleInput, testId: testId }) }}>
        Save
      </Button>
    </EditTestBlock>
  )
}

export default EditTestHead
