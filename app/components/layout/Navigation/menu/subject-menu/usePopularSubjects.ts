import { useQuery } from 'react-query';
import { SubjectService } from '@/services/subject.service';
import { IMenuItemSubject } from '@/components/layout/Navigation/menu/menu.interface';
import { getSearchPageWithSubject } from '@/config/url.config';

export const usePopularSubjects = () => {
  return useQuery(
    'popular subject-menu menu',
    () => SubjectService.getPopularSubjects(),
    {
      select({ data }) {
        return data
          .map(
            (subject) =>
              ({
                title: subject.name,
                link: getSearchPageWithSubject(subject.slug),
                countTests: subject.countTests
              } as IMenuItemSubject)
          )
          .splice(0, 4);
      },
      onError(error) {}
    }
  );
};
