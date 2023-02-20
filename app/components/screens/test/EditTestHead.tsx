import EditTestBlock from '@/components/ui/form-elements/edit-test-elements/EditTestBlock'
import { useDebouncedMutation } from '@/hooks/useDebouncedMutation'
import EditTestInputLine from '@/ui/form-elements/edit-test-elements/EditTestInputLine'
import EditTestTextarea from '@/ui/form-elements/edit-test-elements/EditTestTextarea'
import { ChangeEvent, FC, useState } from 'react'
import SelectSubject from './SelectSubject'
import { useEditTestHead } from './useEditTestHead'

interface EditTestHead {
  testId: string
  title: string
  description: string
  subjectId?: string
}

const EditTestHead: FC<EditTestHead> = ({ testId, description, title, subjectId }) => {
  const [titleInput, setTitleInput] = useState(description)
  const [descriptionInput, setDescriptionInput] = useState(title)
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
        isActive={true}
      />
      <EditTestTextarea
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setDescriptionInput(event.target.value)
        }
        value={descriptionInput}

      />
      <div className='mt-4 ml-2'>
        <span className="uppercase text-xs">Оберіть предмет</span>
        <SelectSubject testId={testId} subjectId={subjectId} />
      </div>
    </EditTestBlock>
  )
}

export default EditTestHead
