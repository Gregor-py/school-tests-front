import { FC } from 'react';
import TestPresentCard from '@/ui/test-present/TestPresentCard';
import { ITest } from '@/shared/types/test.types';
import SkeletonLoader from '@/ui/SkeletonLoader';

interface TestsList {
  linkType: 'edit' | 'present';
  testsList?: ITest[];
}

const TestsList: FC<TestsList> = ({ testsList, linkType }) => {
  if (!testsList) {
    return (
      <div className="grid grid-cols-4 gap-3 mt-4">
        <SkeletonLoader count={1} className="h-52" />
        <SkeletonLoader count={1} className="h-52" />
        <SkeletonLoader count={1} className="h-52" />
        <SkeletonLoader count={1} className="h-52" />
        <SkeletonLoader count={1} className="h-52" />
        <SkeletonLoader count={1} className="h-52" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3 mt-4">
      {testsList.map((test) => (
        <TestPresentCard test={test} key={test._id} linkType={linkType} />
      ))}
    </div>
  );
};

export default TestsList;
