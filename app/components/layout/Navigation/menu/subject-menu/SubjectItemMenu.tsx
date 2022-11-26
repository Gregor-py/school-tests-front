import { FC } from 'react';
import { IMenuItemSubject } from '@/components/layout/Navigation/menu/menu.interface';
import Link from 'next/link';
import styles from '../Menu.module.scss';

const SubjectMenuItem: FC<IMenuItemSubject> = ({ link, title, countTests }) => {
  return (
    <li className={styles.subjectItemMenu}>
      <Link href={link}>
        <a>
          <span>{title}</span>
          <span>({countTests})</span>
        </a>
      </Link>
    </li>
  );
};

export default SubjectMenuItem;
