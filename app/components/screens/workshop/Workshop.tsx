import Block from '@/components/ui/Block';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useCreatedTests } from '@/screens/workshop/useCreatedTests';
import CreateTestButton from '@/screens/workshop/CreateTestButton';
import TestsList from '@/ui/test-present/TestsList';

const Workshop: FC = () => {
  const { createdTests, isLoading } = useCreatedTests();

  return (
    <Meta title="Майстерня" description={'Створюй та виконуй тести'}>
      <div>
        <Block className="text-center mt-3 text-xl" full={true}>
          Створені тести
        </Block>
        <TestsList testsList={createdTests} />
        <CreateTestButton refetch={() => console.log()} />
      </div>
    </Meta>
  );
};

export default Workshop;
