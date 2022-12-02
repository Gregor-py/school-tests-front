import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect';
import LoginForm from './LoginForm';
import styles from './Auth.module.scss';

const AuthLogin: FC = () => {
  useAuthRedirect();

  return (
    <Meta title="Аунтитифікація">
      <section className={styles.section}>
        <LoginForm />
      </section>
    </Meta>
  );
};

export default AuthLogin;
