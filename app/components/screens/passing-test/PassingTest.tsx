import { FC, useEffect } from 'react';
import { useQuery } from 'react-query';
import { PassingTestService } from '@/services/passing-test.service';
import { IPassingTest } from '@/shared/types/test.types';
import { useAuth } from '@/hooks/useAuth';
import Meta from '@/utils/meta/Meta';
import { usePassingTest } from '@/screens/edit-test/usePassingTest';
import Error404 from '../../../../pages/404';

const PassingTest: FC<{ passingTestId: string }> = ({ passingTestId }) => {
  const { passingTest, notPassedTasks, isLoading } =
    usePassingTest(passingTestId);
  const { user, isLoading: isLoadingUser } = useAuth();

  if (isLoading || isLoadingUser) {
    return null;
  }
  if (!passingTest || !user) {
    return <Error404 />;
  }
  if (user.email !== passingTest?.owner.email) {
    return <Error404 />;
  }
  return (
    <Meta
      title={passingTest.testParent.title}
      description={passingTest.testParent.description}
    >
      <div>{JSON.stringify(passingTest)}</div>
      <div className={'mt-10'}>{JSON.stringify(notPassedTasks)}</div>
    </Meta>
  );
};

export default PassingTest;
