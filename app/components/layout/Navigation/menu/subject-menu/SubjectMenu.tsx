import { FC } from 'react';
import { usePopularSubjects } from '@/components/layout/Navigation/menu/subject-menu/usePopularSubjects';
import styles from '../Menu.module.scss';
import SubjectItemMenu from '@/components/layout/Navigation/menu/subject-menu/SubjectItemMenu';
import SkeletonLoader from '@/ui/SkeletonLoader';

const SubjectMenu: FC = () => {
  const { isLoading, data } = usePopularSubjects();

  return isLoading || !data ? (
    <SkeletonLoader count={5} className="h-5 mt-3" />
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
