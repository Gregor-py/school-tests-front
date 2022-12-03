import { ISubject } from '@/shared/types/subject.types';

export interface IUser {
  _id: string;
  email: string;
  isAdmin: boolean;
  region: string;
  class: number;
  name: string;
  secondName: string;
  favoriteSubjects: ISubject[];
  startedTests: [];
  createdAt: string;
}
