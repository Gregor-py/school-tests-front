import { ChangeEvent, FC, useEffect, useState } from 'react';
import Meta from '@/utils/meta/Meta';
import TestsList from '@/components/ui/test-present/TestsList';
import styles from './Home.module.scss';
import { MaterialIcon } from '@/ui/icons/MaterialIcon';
import { useQuery } from 'react-query';
import { useDebounce } from '@/hooks/useDebounce';
import { TestService } from '@/services/test/test.service';
import dynamic from 'next/dynamic';

const DynamicSelectSubjectSearch = dynamic(() => import('@/screens/home/SelectSubjectSearch'), {
  ssr: false
});
const DynamicSelectClassSearch = dynamic(() => import('@/screens/home/SelectClassSearch'), {
  ssr: false
});

interface Home {
  defaultSubject?: string;
}

const Home: FC<Home> = ({ defaultSubject }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subject, setSubject] = useState<string>('');
  const [schoolClass, setSchoolClass] = useState<number>(0);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data } = useQuery(
    ['search tests', debouncedSearchTerm, subject, schoolClass],
    () => TestService.search(debouncedSearchTerm, schoolClass, subject),
    {
      select: ({ data }) => data
    }
  );

  useEffect(() => {
    if (defaultSubject) {
      setSubject(defaultSubject);
    }
  }, [defaultSubject]);
  return (
    <Meta title="Шкільні тести" description={'Створюй та виконуй тести'}>
      <div className={'mt-3 flex gap-2 items-center'}>
        <div className={styles.searchField}>
          <input
            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
            value={searchTerm}
            type="text"
            placeholder={'Пошук'}
          />
          <div className={styles.iconDecor}>
            <MaterialIcon name={'MdSearch'} />
          </div>
        </div>
        <DynamicSelectSubjectSearch
          defaultSubject={defaultSubject}
          value={subject}
          setValue={(value) => setSubject(value)}
        />
        <DynamicSelectClassSearch setValue={setSchoolClass} value={schoolClass} />
      </div>
      <TestsList linkType={'present'} testsList={data} />
    </Meta>
  );
};

export default Home;
