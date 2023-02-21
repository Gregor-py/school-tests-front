import { MaterialIcon } from '@/ui/icons/MaterialIcon';
import { EditTaskService } from '@/services/task/edit-task.service';
import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { useMutation } from 'react-query';
import styles from '../EditTest.module.scss';

interface SetAnswerAsCorrect {
  isCorrect: boolean;
  answerId: string;
  taskId: string;
  refetchTask: () => void;
  setCorrectAnswerId: (newCorrectAnswerId: string) => void;
}

const SetAnswerAsCorrect: FC<SetAnswerAsCorrect> = ({
  isCorrect,
  answerId,
  taskId,
  refetchTask,
  setCorrectAnswerId
}) => {
  const { mutate: setCorrectAnswer, isSuccess } = useMutation(
    ['set correct answer to task', answerId],
    (data: { taskId: string; newCorrectAnswerId: string }) =>
      EditTaskService.changeCorrectAnswer(data.taskId, data.newCorrectAnswerId)
  );

  const handleClick = async () => {
    setCorrectAnswer({ taskId: taskId, newCorrectAnswerId: answerId });
    setCorrectAnswerId(answerId);
  };

  useEffect(() => {
    if (isSuccess) {
      refetchTask();
    }
  }, [isSuccess, refetchTask]);

  return (
    <button onClick={handleClick}>
      <div className={classNames(styles.decor)}>
        <div
          className={classNames(styles.svgContainer, {
            'opacity-0': !isCorrect
          })}
        >
          <MaterialIcon name="MdCheck" />
        </div>
      </div>
    </button>
  );
};

export default SetAnswerAsCorrect;
