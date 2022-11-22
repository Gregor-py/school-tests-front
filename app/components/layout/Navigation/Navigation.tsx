import { FC } from 'react';
import styles from './Navigation.module.scss';
import Logo from '@/components/layout/Navigation/Logo';
import MenuContainer from '@/components/layout/Navigation/menu/MenuContainer';

const Navigation: FC = () => {
  return (
    <div className={styles.navigation}>
      <Logo />
      <MenuContainer />
    </div>
  );
};

export default Navigation;
