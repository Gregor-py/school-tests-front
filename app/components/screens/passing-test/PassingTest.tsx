import { FC, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Meta from '@/utils/meta/Meta';
import { usePassingTest } from '@/screens/edit-test/usePassingTest';
import Error404 from '../../../../pages/404';
import PassingTask from '@/screens/passing-test/PassingTask';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './PassingTest.module.scss';
import { PieChart } from 'react-minimal-pie-chart';

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
      <Meta title={passingTest.testParent.title} description={passingTest.testParent.description}>
        <div className={styles.result}>
          <div className={'text-3xl text-center mb-8'}>Результати</div>
          <div className={styles.stats}>
            {passingTest.correctPercent !== undefined ? (
              <>
                <div>
                  <PieChart
                    style={{ maxWidth: 150 }}
                    data={[
                      { title: 'Правильні', value: passingTest.correctPercent, color: '#08fc61' },
                      {
                        title: 'Неправильні',
                        value: 100 - passingTest.correctPercent,
                        color: '#fc0835'
                      }
                    ]}
                  />
                </div>
                <div>
                  Результат у відсотках:
                  <div>
                    <span>{passingTest.correctPercent}%</span>
                  </div>
                </div>
                <div>
                  Результат по 12 бальній системі:
                  <div>
                    <span>{passingTest.correctPercent * 0.12} бал.</span>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </Meta>
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
