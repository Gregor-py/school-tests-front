import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginInputFields } from '@/screens/auth/auth.interface';
import Field from '@/ui/form-elements/Field';
import { validEmail } from '@/shared/regexp/validEmail';
import Button from '@/components/ui/form-elements/Button';
import { toast } from 'react-toastify';
import { useAuth } from '@/hooks/useAuth';
import styles from './Auth.module.scss';
import Link from 'next/link';

const LoginForm: FC = () => {
  const { register, handleSubmit, formState, reset } =
    useForm<LoginInputFields>();
  const { isLoading } = useAuth();

  const onSubmit: SubmitHandler<LoginInputFields> = (data) => {
    toast.success(JSON.stringify(data));
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Field
        {...register('email', {
          required: 'Це поле має бути заповнене',
          pattern: { value: validEmail, message: 'Має бути пошта' }
        })}
        icon={'MdMail'}
        placeholder={'Пошта'}
        error={formState.errors.email}
        className={styles.field}
      />
      <Field
        {...register('password', {
          required: 'Поле має бути заповнене'
        })}
        placeholder="Пароль"
        error={formState.errors.password}
        icon={'MdLock'}
        className={styles.field}
      />
      <Button className={styles.button} type="submit" disabled={isLoading}>
        Логін
      </Button>
      <span>
        Немає аккаунту?
        <Link href="/auth/register">
          <a> Зареєструватися</a>
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
