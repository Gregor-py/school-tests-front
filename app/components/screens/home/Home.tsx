import { FC } from 'react';
import Meta from '@/utils/meta/Meta';
import { toast } from 'react-toastify';
import TestsSlider from '@/ui/test-present/tests-slider/TestsSlider';
import { useCreatedTests } from '@/screens/workshop/useCreatedTests';

const Home: FC = () => {
  const { createdTests, isLoading } = useCreatedTests();
  return (
    <Meta title="Шкільні тести" description={'Створюй та виконуй тести'}>
      <TestsSlider testsList={createdTests} title={'Популярні тести'} />
      <TestsSlider testsList={createdTests} title={'Непопулярні тести'} />
    </Meta>
  );
};

export default Home;
