import { FC } from 'react';
import { IMenuItemSubject } from '@/components/layout/Navigation/menu/menu.interface';
import Link from 'next/link';
import styles from '../Menu.module.scss';

const SubjectMenuItem: FC<IMenuItemSubject> = ({ link, title, countTests }) => {
  return (
    <li className={styles.subjectMenuItem}>
      <Link href={link}>
        <a>
          <span>{title}</span>
          <span className={styles.countTest}>{countTests}</span>
        </a>
      </Link>
    </li>
  );
};

export default SubjectMenuItem;
