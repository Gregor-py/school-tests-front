import { FC } from 'react';
import { ITest } from '@/shared/types/test.types';
import Image from 'next/image';
import { subjectImageData } from '@/ui/test-present/subject-image.data';
import Link from 'next/link';
import styles from './TestPresent.module.scss';
import classNames from 'classnames';

interface TestPresentCard {
  test: ITest;
  shadows?: boolean;
}

const TestPresentCard: FC<TestPresentCard> = ({ test, shadows = true }) => {
  return (
    <Link href={`/test/edit/${test._id}`}>
      <a>
        <div className={classNames(styles.card, { 'shadow-xl': shadows })}>
          <div className={styles.superimposedBlock}>
            <div>
              <span
                className={classNames(
                  styles.superimposedBlockItem,
                  'bg-primary text-white'
                )}
              >
                {test.subject.name}
              </span>
            </div>
            <div>
              <span
                className={classNames(
                  styles.superimposedBlockItem,
                  'bg-amber-500 text-white mt-2'
                )}
              >
                {test.class} клас
              </span>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src={subjectImageData[test.subject.slug]}
              alt={test.subject.name}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className={styles.bottom}>{test.title}</div>
        </div>
      </a>
    </Link>
  );
};

export default TestPresentCard;
