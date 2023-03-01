import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { TestService } from '@/services/test/test.service';
import { EditTestService } from '@/services/test/edit-test.service';
import { GetStaticProps } from 'next';
import { ITest } from '@/shared/types/test.types';

const TestPresent: FC<{ test: ITest }> = ({ test }) => {
  return (
    <Meta title={''} description={''}>
      <div>{test.title}</div>
      <div>{test.description}</div>
    </Meta>
  );
};

export default TestPresent;
