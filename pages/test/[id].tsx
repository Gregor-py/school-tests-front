import { NextPageAuth } from '@/shared/types/auth.types';
import { useRouter } from 'next/router';
import Error404 from '../404';
import TestPresent from '@/screens/test-present/TestPresent';

const TestPage: NextPageAuth = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <Error404 />;
  }

  return <TestPresent testId={String(id)} />;
};

export default TestPage;
