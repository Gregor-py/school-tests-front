import { axiosClassic } from '../api/interceptors';
import { getSubjectsUrl } from '@/config/api.config';
import { ISubjectPopular } from '@/shared/types/subject.types';
import { toast } from 'react-toastify';

export const SubjectService = {
  async getPopularSubjects() {
    return axiosClassic.get<ISubjectPopular[]>(getSubjectsUrl('/popular'));
  }
};
