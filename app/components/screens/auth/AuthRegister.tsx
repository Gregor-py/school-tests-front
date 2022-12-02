import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect';
import styles from './Auth.module.scss';
import RegisterForm from '@/screens/auth/RegisterForm';

const AuthRegister: FC = () => {
  useAuthRedirect();

  return (
    <Meta title="Аунтитифікація">
      <section className={styles.section}>
        <RegisterForm />
      </section>
    </Meta>
  );
};

export default AuthRegister;
