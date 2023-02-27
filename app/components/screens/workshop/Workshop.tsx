import Block from '@/components/ui/Block';
import Meta from '@/utils/meta/Meta';
import Link from 'next/link';
import { FC } from 'react';
import { useCreatedTests } from '@/screens/workshop/useCreatedTests';
import CreateTestButton from '@/screens/workshop/CreateTestButton';
import { log } from 'util';
import TestPresentCard from '@/ui/test-present/TestPresentCard';

const Workshop: FC = () => {
  const { createdTests, isLoading } = useCreatedTests();

  return (
    <Meta title="Майстерня" description={'Створюй та виконуй тести'}>
      <div>
        <Block className="text-center mt-3 text-xl" full={true}>
          Створені тести
        </Block>
        <div className="grid grid-cols-4 gap-3 mt-4">
          {createdTests?.map((createdTest) => (
            <TestPresentCard test={createdTest} key={createdTest._id} />
          ))}
        </div>
        <CreateTestButton refetch={() => console.log()} />
      </div>
    </Meta>
  );
};

export default Workshop;
