import { FC, useEffect } from 'react';
import { NextPageAuth } from '@/shared/types/auth.types';
import { useRouter } from 'next/router';
import { usePassingTest } from '@/screens/edit-test/usePassingTest';
import ErrorLoader from 'next/dist/build/webpack/loaders/error-loader';
import Error404 from '../../404';

const StartTestPage: NextPageAuth = () => {
  const { query, push } = useRouter();
  const { startTest, startedTestId } = usePassingTest(String(query.id));

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
