import { FC } from 'react';
import { NextPageAuth } from '@/shared/types/auth.types';
import { useRouter } from 'next/router';
import Error404 from '../404';
import TestPresent from '@/screens/test-present/TestPresent';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult
} from 'next';
import { ITest } from '@/shared/types/test.types';
import { TestService } from '@/services/test/test.service';
import { ParsedUrlQuery } from 'querystring';
import { errorCatch } from 'api/api.helper';

interface TestPageProps {
  test: ITest;
}

interface PageParams extends ParsedUrlQuery {
  id: string;
}

const TestPage: NextPageAuth<TestPageProps> = ({ test }) => {
  if (test) {
    return <TestPresent test={test} />;
  } else {
    return <Error404 />;
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data } = await TestService.search();
    const paths = data.map((test) => ({ params: { id: test._id } }));
    return { paths: paths, fallback: 'blocking' };
  } catch (e) {
    return { paths: [], fallback: 'blocking' };
  }
};

export const getStaticProps: GetStaticProps<
  TestPageProps,
  PageParams
> = async ({ params }) => {
  try {
    const { data } = await TestService.getTest(String(params?.id));
    return { props: { test: data } };
  } catch (e) {
    console.log(errorCatch(e));

    return {
      notFound: true
    };
  }
};

export default TestPage;
