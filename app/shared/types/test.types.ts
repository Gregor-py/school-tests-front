import { ISubject } from './subject.types';

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
