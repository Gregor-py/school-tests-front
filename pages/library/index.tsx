import { NextPageAuth } from '@/shared/types/auth.types';
import Library from '@/screens/library/Library';

const LibraryPage: NextPageAuth = () => {
  return <Library />;
};

LibraryPage.isOnlyUser = true;

export default LibraryPage;
