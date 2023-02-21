import { MaterialIcon } from '@/ui/icons/MaterialIcon';
import { EditTaskService } from '@/services/task/edit-task.service';
import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { useMutation } from 'react-query';
import styles from '../EditTest.module.scss';

interface DeleteTaskButton {
  testId: string;
  taskId: string;
  refetchTest: () => void;
}

const DeleteTaskButton: FC<DeleteTaskButton> = ({
  testId,
  taskId,
  refetchTest
}) => {
  const { mutate: deleteTask, isSuccess } = useMutation(
    ['delete answer from task', taskId],
    (data: { taskId: string; testId: string }) =>
      EditTaskService.deleteTask(data.taskId, data.testId)
  );

  const handleClick = async () => {
    deleteTask({ taskId: taskId, testId: testId });
  };

  useEffect(() => {
    if (isSuccess) {
      refetchTest();
    }
  }, [isSuccess, refetchTest]);

  return (
    <button
      onClick={handleClick}
      className={classNames(styles.deleteButton, 'text-4xl')}
    >
      <MaterialIcon name="MdDelete" />
    </button>
  );
};

export default DeleteTaskButton;
