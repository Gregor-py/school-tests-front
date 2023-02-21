import { MaterialIcon } from '@/ui/icons/MaterialIcon';
import { EditTaskService } from '@/services/task/edit-task.service';
import { FC, useEffect } from 'react';
import { useMutation } from 'react-query';
import styles from '../EditTest.module.scss';

interface DeleteAnswerButton {
  answerId: string;
  taskId: string;
  refetchTask: () => void;
}

const DeleteAnswerButton: FC<DeleteAnswerButton> = ({
  answerId,
  taskId,
  refetchTask
}) => {
  const { mutate: deleteAnswer, isSuccess } = useMutation(
    ['delete answer from task', answerId],
    (data: { answerId: string; taskId: string }) =>
      EditTaskService.deleteAnswer(data.answerId, data.taskId)
  );

  const handleClick = async () => {
    deleteAnswer({ answerId: answerId, taskId: taskId });
  };

  useEffect(() => {
    if (isSuccess) {
      refetchTask();
    }
  }, [isSuccess, refetchTask]);

  return (
    <button onClick={handleClick} className={styles.deleteButton}>
      <MaterialIcon name="MdCancel" />
    </button>
  );
};

export default DeleteAnswerButton;
