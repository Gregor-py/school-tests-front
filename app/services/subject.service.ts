import { axiosClassic } from '../api/interceptors';
import { getSubjectsUrl } from '@/config/api.config';
import { ISubjectPopular } from '@/shared/types/subject.types';

export const SubjectService = {
  async getPopularSubjects() {
    console.log(getSubjectsUrl('/popular'));
    return axiosClassic.get<ISubjectPopular[]>(getSubjectsUrl('/popular'));
  },
};
