import { FC } from 'react';
import { NextPageAuth } from '@/shared/types/auth.types';
import { useRouter } from 'next/router';
import Error404 from '../../404';
import PassingTest from '@/screens/passing-test/PassingTest';

const PassingTestPage: NextPageAuth = () => {
  const { query } = useRouter();

  if (!query?.id) {
    return <Error404 />;
  }

  return <PassingTest passingTestId={String(query.id)} />;
};

PassingTestPage.isOnlyUser = true;

export default PassingTestPage;
