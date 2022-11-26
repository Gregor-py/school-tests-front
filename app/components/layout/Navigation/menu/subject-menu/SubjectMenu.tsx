import { FC } from 'react';
import { usePopularSubjects } from '@/components/layout/Navigation/menu/subject-menu/usePopularSubjects';
import styles from '../Menu.module.scss';
import SubjectItemMenu from '@/components/layout/Navigation/menu/subject-menu/SubjectItemMenu';

const SubjectMenu: FC = () => {
  const { isLoading, data } = usePopularSubjects();

  return isLoading || !data ? (
    <div>Loading...</div>
  ) : (
    <div className={styles.menu}>
      <div className={styles.heading}>Популярні предмети</div>
      <ul>
        {data.map((subject) => (
          <SubjectItemMenu
            title={subject.title}
            link={subject.link}
            countTests={subject.countTests}
            key={subject.link}
          />
        ))}
      </ul>
    </div>
  );
};

export default SubjectMenu;
