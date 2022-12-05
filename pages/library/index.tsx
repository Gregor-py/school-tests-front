import { NextPageAuth } from '@/shared/types/auth.types';

const Library: NextPageAuth = () => {
  return <div>Library Page</div>;
};

Library.isOnlyUser = true;

export default Library;
