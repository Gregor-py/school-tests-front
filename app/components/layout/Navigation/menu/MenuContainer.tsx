import { FC } from 'react';
import styles from './Menu.module.scss';
import Menu from '@/components/layout/Navigation/menu/Menu';
import { navigationMenu } from '@/components/layout/Navigation/menu/menu.data';

const MenuContainer: FC = () => {
  return (
    <div className={styles.menuContainer}>
      <Menu items={navigationMenu.items} title={navigationMenu.title} />
    </div>
  );
};

export default MenuContainer;
