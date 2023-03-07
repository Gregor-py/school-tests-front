import { FC, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Meta from '@/utils/meta/Meta';
import { usePassingTest } from '@/screens/edit-test/usePassingTest';
import Error404 from '../../../../pages/404';
import PassingTask from '@/screens/passing-test/PassingTask';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './PassingTest.module.scss';

const PassingTest: FC<{ passingTestId: string }> = ({ passingTestId }) => {
  const { passingTest, notPassedTasks, isLoading, refetchPassingTest, isSuccessFinishingTest } =
    usePassingTest(passingTestId);
  const { user, isLoading: isLoadingUser } = useAuth();

  if (!user) {
    return <Error404 />;
  }
  if (user.email !== passingTest?.owner.email) {
    return <Error404 />;
  }
  if (isLoading || isLoadingUser) {
    return null;
  }
  if (!passingTest || notPassedTasks === undefined) {
    return null;
  }
  if (passingTest.isPassed) {
    return (
      <div className={'text-3xl text-amber-400'}>Тут має бути статистика та перевірений тест</div>
    );
  }

  return (
    <Meta title={passingTest.testParent.title} description={passingTest.testParent.description}>
      <div className={styles.container}>
        <div className="max-w-4xl">
          <Swiper className={'p-5 items-center'} slidesPerView={1} spaceBetween={50}>
            {notPassedTasks.map((task, id) => (
              <SwiperSlide className={''} key={task._id}>
                <PassingTask
                  isLast={notPassedTasks.length === id + 1}
                  passingTestId={passingTestId}
                  task={task}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Meta>
  );
};

export default PassingTest;
