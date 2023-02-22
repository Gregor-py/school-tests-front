import { FC } from 'react';
import Meta from '@/utils/meta/Meta';
import Block from '@/components/ui/Block';
import styles from './Profile.module.scss';
import Field from '@/ui/form-elements/Field';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginInputFields } from '@/screens/auth/auth.interface';
import Button from '@/ui/form-elements/Button';
import classNames from 'classnames';
import { useMutation } from 'react-query';
import { EditTaskService } from '@/services/task/edit-task.service';
import { UserService } from '@/services/user.service';
import { useAuth } from '@/hooks/useAuth';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import SkeletonLoader from '@/ui/SkeletonLoader';

interface ChangeProfileFields {
  name: string;
  secondName: string;
}

const Profile: FC = () => {
  const { mutate: changeName, isLoading: isLoadingName } = useMutation(
    'change user name',
    (data: { name: string }) => UserService.changeName(data.name)
  );
  const { mutate: changeSecondName, isLoading: isLoadingSecondName } =
    useMutation('change user second name', (data: { secondName: string }) =>
      UserService.changeSecondName(data.secondName)
    );

  const { register, handleSubmit, formState, reset } =
    useForm<ChangeProfileFields>();
  const onSubmit: SubmitHandler<ChangeProfileFields> = (data) => {
    changeName({ name: data.name });
    changeSecondName({ secondName: data.secondName });
  };

  const { user, isLoading } = useCurrentUser();

  if (isLoading || !user) {
    return (
      <div className="mx-auto max-w-3xl">
        <SkeletonLoader count={1} className="h-14 mt-5" />
        <SkeletonLoader count={1} className="h-44 mt-5" />
      </div>
    );
  }

  return (
    <Meta title="Профіль" description="">
      <Block full={true} className="text-center mt-3 text-xl">
        Профіль
      </Block>
      <Block className="mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            {...register('name', {
              required: 'Поле має бути заповнене'
            })}
            defaultValue={user.name}
            placeholder={`Ім'я`}
            error={formState.errors.name}
            icon={'MdVerifiedUser'}
            className={styles.field}
          />
          <Field
            {...register('secondName', {
              required: 'Поле має бути заповнене'
            })}
            defaultValue={user.secondName}
            placeholder="Прізвище"
            error={formState.errors.secondName}
            icon={'MdVerifiedUser'}
            className={classNames(styles.field, 'mt-3')}
          />
          <Button
            className={'w-full mt-4'}
            type="submit"
            disabled={isLoadingName || isLoadingSecondName}
          >
            Зберегти
          </Button>
        </form>
      </Block>
    </Meta>
  );
};

export default Profile;
