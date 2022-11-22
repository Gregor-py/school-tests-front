import { FC } from 'react';
import styles from './Menu.module.scss';
import { IMenu } from '@/components/layout/Navigation/menu/menu.interface';
import MenuItem from '@/components/layout/Navigation/menu/MenuItem';

const Menu: FC<IMenu> = ({ items, title }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.heading}>{title}</div>
      <ul>
        {items.map((menuItem) => (
          <MenuItem
            key={menuItem.title}
            icon={menuItem.icon}
            title={menuItem.title}
            link={menuItem.link}
          />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
