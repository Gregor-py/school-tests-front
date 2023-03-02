import { ISubject } from './subject.types';
import { IUser } from '@/shared/types/user.types';

export interface ITest {
  _id: string;
  owner: string;
  class: number;
  title: string;
  description: string;
  tags: [];
  tasks: string[];
  subject: ISubject;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ITask {
  _id: string;
  owner: string;
  question: string;
  answerVariants: any[];
  correctAnswer: any;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAnswer {
  _id: string;
  owner: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IPassingTest {
  _id: string;
  owner: IUser;
  testParent: ITest;
  passedTasks: string[];
  isPassed: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
