import { useQuery } from 'react-query';
import { TestService } from '@/services/test/test.service';

export const useCreatedTests = () => {
  const { data: createdTests, isLoading } = useQuery(
    'get created tests by user',
    () => TestService.getCreated(),
    {
      select({ data }) {
        return data;
      }
    }
  );

  return { createdTests, isLoading };
};
