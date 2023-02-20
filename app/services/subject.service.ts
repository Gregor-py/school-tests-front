import { getSubjectsUrl } from '@/config/api.config'
import { ISubject, ISubjectPopular } from '@/shared/types/subject.types'
import { axiosClassic } from '../api/interceptors'

export const SubjectService = {
  async getPopularSubjects() {
    return axiosClassic.get<ISubjectPopular[]>(getSubjectsUrl('/popular'))
  },
  async getAllSubjects() {
    return axiosClassic.get<ISubject[]>(getSubjectsUrl(""))
  }
}
