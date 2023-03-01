import { FC } from 'react';
import { NextPageAuth } from '@/shared/types/auth.types';

const TestPage: NextPageAuth = () => {
  return <div></div>;
};

TestPage.isOnlyUser = true;

export default TestPage;
