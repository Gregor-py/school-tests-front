import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  LoginInputFields,
  RegisterInputFields
} from '@/screens/auth/auth.interface';
import Field from '@/ui/form-elements/Field';
import { validEmail } from '@/shared/regexp/validEmail';
import Button from '@/components/ui/form-elements/Button';
import { toast } from 'react-toastify';
import { useAuth } from '@/hooks/useAuth';
import styles from './Auth.module.scss';
import Link from 'next/link';
import { useActions } from '@/hooks/useActions';

const RegisterForm: FC = () => {
  const { register, handleSubmit, formState, reset } =
    useForm<RegisterInputFields>();
  const { isLoading } = useAuth();
  const { register: registerActions } = useActions();

  const onSubmit: SubmitHandler<RegisterInputFields> = (data) => {
    data.schoolClass = Number(data.schoolClass);
    registerActions(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Field
        {...register('name', {
          required: 'Це поле має бути заповнене'
        })}
        icon={'MdVerifiedUser'}
        placeholder={"Ім'я"}
        error={formState.errors.name}
        className={styles.field}
      />
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
          required: 'Поле має бути заповнене',
          min: {
            value: 8,
            message: 'Має бути мінімум 8 символів'
          }
        })}
        placeholder="Пароль"
        error={formState.errors.password}
        icon={'MdLock'}
        className={styles.field}
      />
      <Field
        {...register('schoolClass', {
          required: 'Поле має бути заповнене',
          min: {
            value: 1,
            message: 'Має бути в деапозоні від 1 до 11'
          },
          max: {
            value: 11,
            message: 'Має бути в деапозоні від 1 до 11'
          }
        })}
        placeholder="Клас"
        error={formState.errors.schoolClass}
        icon={'MdClass'}
        className={styles.field}
      />
      <Button className={styles.button} type="submit" disabled={isLoading}>
        Зареєструватися
      </Button>
      <span>
        Вже є аккаунту?
        <Link href="/auth/login">
          <a> Ввійти в аккаунт</a>
        </Link>
      </span>
    </form>
  );
};

export default RegisterForm;
