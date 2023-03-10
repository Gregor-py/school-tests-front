import { IMenu } from '@/components/layout/Navigation/menu/menu.interface';

export const navigationMenu: IMenu = {
  title: 'Навігація',
  items: [{ icon: 'MdHome', link: '/', title: 'Головна' }]
};

export const profileMenu: IMenu = {
  title: 'Профіль',
  items: [
    { icon: 'MdHail', link: '/profile', title: 'Профіль' },
    { icon: 'MdLibraryBooks', link: '/library', title: 'Бібліотека' },
    { icon: 'MdWork', link: '/workshop', title: 'Майстерня' }
  ]
};
