import { FC } from 'react';
import Navigation from '@/components/layout/Navigation/Navigation';
import { Layout } from '@/components/layout/layout.interface';
import styles from './Layout.module.scss';

const Layout: FC<Layout> = ({ children }) => {
  return <div className={styles.layout}>
    <Navigation />
    <main>
      {children}
    </main>
  </div>;
};

export default Layout;