import { useEffect } from 'react';
import { NextPageAuth } from '@/shared/types/auth.types';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { PassingTestService } from '@/services/passing-test.service';

const StartTestPage: NextPageAuth = () => {
  const { query, push } = useRouter();
  const { mutate: startTest, data: startedTestId } = useMutation(
    ['start test', query?.id],
    (testId: string) => PassingTestService.startTest(testId)
  );

  useEffect(() => {
    if (query?.id) {
      startTest(String(query.id));
    }
  }, []);

  useEffect(() => {
    if (startedTestId) {
      push(`/test/passing/${startedTestId}`);
    }
  }, [startedTestId]);

  // todo add skeleton loader
  return null;
};

StartTestPage.isOnlyUser = true;

export default StartTestPage;
