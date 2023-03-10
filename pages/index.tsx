import Home from '@/components/screens/home/Home';
import { NextPageAuth } from '@/shared/types/auth.types';
import { useRouter } from 'next/router';

const HomePage: NextPageAuth = () => {
  const router = useRouter();
  const { subject } = router.query;

  if (subject) {
    return <Home defaultSubject={String(subject)} />;
  }
  return <Home />;
};

export default HomePage;
