import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import TestsList from '@/ui/test-present/TestsList';
import { useQuery } from 'react-query';
import { UserService } from '@/services/user.service';
import TestsSlider from '@/ui/test-present/tests-slider/TestsSlider';
import ResultsSlider, { IResult } from '@/ui/test-present/tests-slider/ResultsSlider';
import { IPassingTest } from '@/shared/types/test.types';
import passingTest from '@/screens/passing-test/PassingTest';

const Library: FC = () => {
  const selectResults: (passingTest: IPassingTest) => IResult = (passingTest) => ({
    test: passingTest.testParent,
    passingTestId: passingTest._id,
    correctPercent: passingTest.correctPercent
  });
  const { data: results } = useQuery(
    'get started by user tests',
    () => UserService.getStartedTests(),
    {
      select({ data }) {
        return data.map(selectResults);
      }
    }
  );

  return (
    <Meta title={'Бібліотека'} description={'Опис бібліотека'}>
      <ResultsSlider resultsList={results} />
    </Meta>
  );
};

export default Library;
