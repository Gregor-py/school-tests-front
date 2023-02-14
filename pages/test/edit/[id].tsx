import { FC } from 'react';
import { NextPageAuth } from '@/shared/types/auth.types';
import { useRouter } from 'next/router';
import EditTest from '@/screens/test/EditTest';
import Error404 from '../../404';

const EditTestPage: NextPageAuth = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <Error404 />;
  }

  return <EditTest testId={String(id)} />;
};

EditTestPage.isOnlyUser = true;

export default EditTestPage;
