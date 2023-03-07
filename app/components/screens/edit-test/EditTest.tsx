import { MaterialIcon } from '@/components/ui/icons/MaterialIcon';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import { EditTestService } from '@/services/test/edit-test.service';
import { FC, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import EditTask from './EditTask/EditTask';
import EditTestHead from './EditTestHead/EditTestHead';

const EditTest: FC<{ testId: string }> = ({ testId }) => {
  const { data, isLoading, refetch } = useQuery(
    ['get edit-test data for edit', testId],
    () => EditTestService.getTest(testId),
    {
      select({ data }) {
        return data;
      },
      onError(error) {}
    }
  );

  const { mutate: addTask, isSuccess } = useMutation('add task to edit-test', (testId: string) =>
    EditTestService.addTask(testId)
  );

  const handleClick = async () => {
    addTask(testId);
  };

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);

  if (isLoading || !data) {
    return (
      <div className="mx-auto max-w-3xl">
        <SkeletonLoader count={1} className="h-40 mt-5" />
        <SkeletonLoader count={5} className="h-80 mt-6" />
      </div>
    );
  }

  return (
    <div className="py-4">
      <EditTestHead
        schoolClass={data.class}
        subjectId={data?.subject?._id}
        testId={testId}
        description={data.title}
        title={data.description}
      />

      {data.tasks.map((taskId) => (
        <EditTask testId={testId} taskId={taskId} key={taskId} />
      ))}

      <button className="text-7xl mx-auto block mt-4" onClick={handleClick}>
        <MaterialIcon name={'MdAddCircleOutline'} />
      </button>
    </div>
  );
};

export default EditTest;
