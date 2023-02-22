import { useQuery } from 'react-query';
import { UserService } from '@/services/user.service';

export const useCurrentUser = () => {
  const { data: user, isLoading } = useQuery(
    'get current user',
    () => UserService.getCurrentUser(),
    {
      select({ data }) {
        return data;
      }
    }
  );

  return { user, isLoading };
};
