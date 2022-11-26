import { FC } from 'react';
import styles from './Menu.module.scss';
import Menu from '@/components/layout/Navigation/menu/Menu';
import {
  navigationMenu,
  profileMenu
} from '@/components/layout/Navigation/menu/menu.data';
import SubjectMenu from '@/components/layout/Navigation/menu/subject-menu/SubjectMenu';

const MenuContainer: FC = () => {
  return (
    <div className={styles.menuContainer}>
      <Menu items={navigationMenu.items} title={navigationMenu.title} />
      <Menu items={profileMenu.items} title={profileMenu.title} />
      <SubjectMenu />
    </div>
  );
};

export default MenuContainer;
