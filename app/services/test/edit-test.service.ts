import { getTestUrl } from '@/config/api.config'
import { ITest } from '@/shared/types/test.types'
import { axiosAuth } from '../../api/interceptors'

export const EditTestService = {
  async changeTitle(testId: string, newTitle: string) {
    return axiosAuth.put<ITest>(getTestUrl(`/${testId}`), {
      title: newTitle
    })
  },

  async changeDescription(testId: string, description: string) {
    return axiosAuth.put<ITest>(getTestUrl(`/${testId}`), {
      description: description
    })
  },

  async getTest(testId: string) {
    return axiosAuth.get<ITest>(getTestUrl(`/${testId}`))
  }
}
