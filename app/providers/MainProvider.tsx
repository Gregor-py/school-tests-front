import Layout from '@/components/layout/Layout';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import CustomizedToast from './CustomizedToast';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import AuthProvider from './AuthProvider/AuthProvider';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider Component={Component}>
          <Layout>{children}</Layout>
        </AuthProvider>
        <CustomizedToast />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
};

export default MainProvider;
