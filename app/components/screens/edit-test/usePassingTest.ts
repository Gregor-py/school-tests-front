import { useMutation, useQuery } from 'react-query';
import { PassingTestService } from '@/services/passing-test.service';
import { useEffect } from 'react';

export const usePassingTest = (passingTestId: string) => {
  const {
    data: passingTest,
    isLoading,
    refetch: refetchPassingTest
  } = useQuery(['get passing test', passingTestId], () => PassingTestService.get(passingTestId), {
    select({ data }) {
      return data;
    }
  });
  const { data: notPassedTasks, isLoading: isLoadingNotPassedTasks } = useQuery(
    ['get not passed tasks', passingTestId],
    () => PassingTestService.getNotPassedTasks(passingTestId),
    {
      select({ data }) {
        return data;
      }
    }
  );
  const { mutate: addPassedTask, isLoading: isLoadingAddingPassedTask } = useMutation(
    ['add passed test', passingTestId],
    (data: { taskId: string; chosenAnswer: string }) =>
      PassingTestService.addPassedTask(passingTestId, data.taskId, data.chosenAnswer)
  );
  const {
    mutate: finishTest,
    isSuccess: isSuccessFinishingTest,
    isLoading: isLoadingFinishingTest
  } = useMutation(['finish test', passingTestId], () =>
    PassingTestService.finishTest(passingTestId)
  );

  useEffect(() => {
    refetchPassingTest();
  }, [isSuccessFinishingTest]);

  return {
    passingTest,
    notPassedTasks,
    addPassedTask,
    finishTest,
    refetchPassingTest,
    isSuccessFinishingTest,
    isLoadingFinishingTest,
    isLoading: isLoading && isLoadingNotPassedTasks && isLoadingFinishingTest
  };
};
