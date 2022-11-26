import { IMenu } from '@/components/layout/Navigation/menu/menu.interface';

export const navigationMenu: IMenu = {
  title: 'Навігація',
  items: [
    { icon: 'MdRecommend', link: '/', title: 'Рекомендації' },
    { icon: 'MdSearch', link: '/', title: 'Пошук' }
  ]
};

export const profileMenu: IMenu = {
  title: 'Профіль',
  items: [
    { icon: 'MdHail', link: '/', title: 'Профіль' },
    // { icon: 'MdRecommend', link: '/', title: 'Тести які сподобались' },
    { icon: 'MdFavorite', link: '/', title: 'Обрані тести' }
  ]
};
