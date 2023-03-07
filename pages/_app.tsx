import '@/assets/styles/globals.scss';
import type { AppProps } from 'next/app';
import MainProvider from '../app/providers/MainProvider';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';

type TypeAppProps = AppProps & TypeComponentAuthFields;

function MyApp({ Component, pageProps }: TypeAppProps) {
  return (
    <MainProvider Component={Component}>
      <Component {...pageProps} />
    </MainProvider>
  );
}

export default MyApp;
