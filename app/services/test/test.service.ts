import { ITest } from '@/shared/types/test.types';
import { axiosAuth, axiosClassic } from '../../api/interceptors';
import { getTestUrl } from '@/config/api.config';

export const TestService = {
  async getCreated() {
    return axiosAuth.get<ITest[]>(getTestUrl('/created'));
  },
  async create() {
    return axiosAuth.post<ITest>(getTestUrl(``));
  },
  async search(searchTerm?: string, schoolClass?: number, subject?: string) {
    let searchParameters = getTestUrl(`?searchTerm=${searchTerm}`);

    if (schoolClass && schoolClass > 0) {
      searchParameters += `&class=${schoolClass}`;
    }

    if (subject) {
      searchParameters += `&subject=${subject}`;
    }

    return axiosClassic.get<ITest[]>(searchParameters);
  }
};
