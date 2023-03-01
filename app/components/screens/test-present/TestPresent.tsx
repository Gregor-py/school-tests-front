import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { ITest } from '@/shared/types/test.types';
import styles from './TestPresent.module.scss';
import Image from 'next/image';
import { subjectImageData } from '@/ui/test-present/subject-image.data';

const TestPresent: FC<{ test: ITest }> = ({ test }) => {
  return (
    <Meta title={test.title} description={test.description}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={subjectImageData[test.subject.slug]}
            alt={test.subject.name}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>{test.title}</h1>
          <div className={styles.description}>{test.description}</div>
          <div className={styles.stats}>
            <p>
              <div>Предмет:</div>
              <span className="bg-primary">{test.subject.name}</span>
            </p>
            <p>
              <div>Кількість завдань:</div>
              <span className="bg-emerald-600">{test.tasks.length}</span>
            </p>
            <p>
              <div>Сподобалось:</div>
              <span className="bg-pink-700">55</span>
            </p>
            <p>
              <div>Пройдено:</div>
              <span className="bg-violet-600">316</span>
            </p>
            <p>
              <div>Клас:</div>
              <span className="bg-amber-500">{test.class}</span>
            </p>
          </div>
        </div>
        <button className={styles.startButton}>Розпочати тест</button>
      </div>
    </Meta>
  );
};

export default TestPresent;
