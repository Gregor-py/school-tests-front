import Home from '@/components/screens/home/Home';
import Meta from '@/utils/meta/Meta';
import type { NextPage } from 'next';
import { NextPageAuth } from '@/shared/types/auth.types';

const HomePage: NextPageAuth = () => {
  return <Home />;
};

export default HomePage;
