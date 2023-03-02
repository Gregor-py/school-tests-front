import { useMutation } from 'react-query';
import { PassingTestService } from '@/services/passing-test.service';

export const usePassingTest = (testId: string) => {
  const { mutate: startTest, data: startedTestId } = useMutation(
    ['start test', testId],
    (testId: string) => PassingTestService.startTest(testId)
  );

  return { startTest, startedTestId };
};
