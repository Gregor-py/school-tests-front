import { useMutation, useQuery } from 'react-query';
import { PassingTestService } from '@/services/passing-test.service';
import { TestService } from '@/services/test/test.service';

export const usePassingTest = (passingTestId: string) => {
  const { data: passingTest, isLoading } = useQuery(
    ['get passing test', passingTestId],
    () => PassingTestService.get(passingTestId),
    {
      select({ data }) {
        return data;
      }
    }
  );
  const { data: notPassedTasks, isLoading: isLoadingNotPassedTasks } = useQuery(
    ['get not passed tasks', passingTestId],
    () => PassingTestService.getNotPassedTasks(passingTestId),
    {
      select({ data }) {
        return data;
      }
    }
  );
  const { mutate: addPassedTask } = useMutation(
    ['add passed test', passingTestId],
    (data: { taskId: string; chosenAnswer: string }) =>
      PassingTestService.addPassedTask(
        passingTestId,
        data.taskId,
        data.chosenAnswer
      )
  );

  return {
    passingTest,
    notPassedTasks,
    addPassedTask,
    isLoading: isLoading && isLoadingNotPassedTasks
  };
};
