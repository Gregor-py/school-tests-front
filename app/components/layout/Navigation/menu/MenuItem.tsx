import { FC } from 'react';
import { IMenuItem } from '@/components/layout/Navigation/menu/menu.interface';
import Link from 'next/link';
import { MaterialIcon } from '@/ui/icons/MaterialIcon';
import styles from './Menu.module.scss';
import classNames from 'classnames';

const MenuItem: FC<IMenuItem> = ({ link, title, icon }) => {
  return (
    <li className={classNames(styles.menuItem, 'group')}>
      <Link href={link}>
        <a>
          <MaterialIcon name={icon} />
          <span>{title}</span>
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
