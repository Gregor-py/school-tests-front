import Block from '@/ui/Block';
import { useDebouncedMutation } from '@/hooks/useDebouncedMutation';
import EditTestInputLine from '@/ui/form-elements/edit-test-elements/EditTestInputLine';
import EditTestTextarea from '@/ui/form-elements/edit-test-elements/EditTestTextarea';
import { ChangeEvent, FC, useState } from 'react';
import SelectClass from './SelectClass';
import SelectSubject from './SelectSubject';
import { useEditTestHead } from '../useEditTestHead';

interface EditTestHead {
  testId: string;
  title: string;
  description: string;
  subjectId?: string;
  schoolClass: number;
}

const EditTestHead: FC<EditTestHead> = ({
  testId,
  description,
  title,
  subjectId,
  schoolClass
}) => {
  const [titleInput, setTitleInput] = useState(description);
  const [descriptionInput, setDescriptionInput] = useState(title);
  const { changeDescription, changeTitle } = useEditTestHead();

  useDebouncedMutation(
    () => changeTitle({ newTitle: titleInput, testId }),
    600,
    titleInput
  );
  useDebouncedMutation(
    () => changeDescription({ description: descriptionInput, testId }),
    600,
    descriptionInput
  );

  return (
    <Block>
      <EditTestInputLine
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setTitleInput(event.target.value);
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
      <div className="mt-4 ml-2">
        <span className="uppercase text-xs">Оберіть предмет</span>
        <SelectSubject testId={testId} subjectId={subjectId} />
      </div>
      <div className="mt-4 ml-2">
        <span className="uppercase text-xs">Оберіть клас</span>
        <SelectClass testId={testId} schoolClass={schoolClass} />
      </div>
    </Block>
  );
};

export default EditTestHead;
