import Home from '@/components/screens/home/Home';
import Meta from '@/utils/meta/Meta';
import type { NextPage } from 'next';
import { NextPageAuth } from '@/shared/types/auth.types';

const InfoPage: NextPageAuth = () => {
  return <Home />;
};

InfoPage.isOnlyUser = true;

export default InfoPage;
