import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import MainProvider from '../app/providers/MainProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
}

export default MyApp;
