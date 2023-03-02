import { FC } from 'react';
import { NextPageAuth } from '@/shared/types/auth.types';
import { useRouter } from 'next/router';

const PassingTestPage: NextPageAuth = () => {
  const { query } = useRouter();

  return <div>{query?.id}</div>;
};

PassingTestPage.isOnlyUser = true;

export default PassingTestPage;
