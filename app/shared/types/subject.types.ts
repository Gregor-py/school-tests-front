export interface ISubject {
  _id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __V: number;
}

export interface ISubjectPopular extends ISubject {
  tests: any[];
  countTests: number;
}
