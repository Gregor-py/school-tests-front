import Workshop from '@/components/screens/workshop/Workshop';
import { NextPageAuth } from '@/shared/types/auth.types';

const WorkshopPage: NextPageAuth = () => {
  return <Workshop />;
};

WorkshopPage.isOnlyUser = true;

export default WorkshopPage;
