import Layout from '@/components/layout/Layout';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import CustomizedToast from './CustomizedToast';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout>{children}</Layout>
        <CustomizedToast />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
};

export default MainProvider;
