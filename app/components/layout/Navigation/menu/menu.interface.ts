import { TypeMaterialIconName } from '@/shared/types/icons.types';

export interface IMenuItem {
  icon: TypeMaterialIconName;
  title: string;
  link: string;
}

export interface IMenu {
  items: IMenuItem[];
  title: string;
}
