import Block from '@/components/ui/Block';
import Meta from '@/utils/meta/Meta';
import Link from 'next/link';
import { FC } from 'react';
import { useCreatedTests } from '@/screens/workshop/useCreatedTests';
import CreateTestButton from '@/screens/workshop/CreateTestButton';
import { log } from 'util';

const Workshop: FC = () => {
  const { createdTests, isLoading } = useCreatedTests();

  return (
    <Meta title="Майстерня" description={'Створюй та виконуй тести'}>
      <div>
        <Block className="text-center mt-3 text-xl" full={true}>
          Створені тести
        </Block>
        <div className="grid grid-cols-4 gap-2 mt-4">
          {createdTests?.map((createdTest) => (
            <Link href={`/test/edit/${createdTest._id}`} key={createdTest._id}>
              <a>
                <Block className="w-full">
                  <div className="text-lg truncate">{createdTest.title}</div>
                  <div className="text-base truncate">
                    {createdTest.subject?.name}
                  </div>
                  <div className="text-base truncate">
                    Клас: {createdTest.class}
                  </div>
                </Block>
              </a>
            </Link>
          ))}
        </div>
        <CreateTestButton refetch={() => console.log()} />
      </div>
    </Meta>
  );
};

export default Workshop;
