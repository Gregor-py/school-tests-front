import EditTestInputLine from '@/ui/form-elements/edit-test-elements/EditTestInputLine';
import { useDebouncedMutation } from '@/hooks/useDebouncedMutation';
import { EditTaskService } from '@/services/task/edit-task.service';
import Tippy from '@tippyjs/react';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import DeleteAnswerButton from './DeleteAnswerButton';
import styles from '../EditTest.module.scss';
import SetAnswerAsCorrect from './SetAnswerAsCorrect';

interface EditAnswerVariant {
  answerId: string;
  taskId: string;
  refetchTask: () => void;
  correctAnswerId: string;
  setCorrectAnswerId: (newCorrectAnswerId: string) => void;
}
const EditAnswerVariant: FC<EditAnswerVariant> = ({
  answerId,
  taskId,
  refetchTask,
  correctAnswerId,
  setCorrectAnswerId
}) => {
  const { data, isLoading, isSuccess } = useQuery(
    ['get answer data for edit', answerId],
    () => EditTaskService.getAnswer(answerId),
    {
      select({ data }) {
        return data;
      },
      onError(error) {}
    }
  );
  const [answerVariantInput, setAnswerVariantInput] = useState('');

  const { mutate: changeText } = useMutation(
    'change answer text',
    (data: { answerId: string; newAnswerText: string }) =>
      EditTaskService.changeAnswerText(data.answerId, data.newAnswerText)
  );

  useDebouncedMutation(
    () => changeText({ newAnswerText: answerVariantInput, answerId }),
    600,
    answerVariantInput
  );

  useEffect(() => {
    if (data) {
      setAnswerVariantInput(data.text);
    }
  }, [data]);

  if (isLoading || !data) {
    return null;
  }

  return (
    <div className={styles.editAnswerVariant}>
      <Tippy
        content={
          <span className="text-white">Встановити як правильний варіант</span>
        }
      >
        <SetAnswerAsCorrect
          isCorrect={String(correctAnswerId) === String(answerId)}
          refetchTask={refetchTask}
          answerId={answerId}
          taskId={taskId}
          setCorrectAnswerId={setCorrectAnswerId}
        />
      </Tippy>
      <EditTestInputLine
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setAnswerVariantInput(event.target.value)
        }
        value={answerVariantInput}
        sizeType={'h3'}
      />
      <Tippy
        content={<span className="text-white">Видалити варіант відповіді</span>}
      >
        <DeleteAnswerButton
          answerId={answerId}
          taskId={taskId}
          refetchTask={refetchTask}
        />
      </Tippy>
    </div>
  );
};

export default EditAnswerVariant;
