import { FC } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { ITest } from '@/shared/types/test.types';
import SkeletonLoader from '@/ui/SkeletonLoader';
import TestPresentCard from '@/ui/test-present/TestPresentCard';
import styles from '../TestPresent.module.scss';
import { Navigation } from 'swiper';
import classNames from 'classnames';
import { MaterialIcon } from '@/ui/icons/MaterialIcon';
import NavSlideButton from '@/ui/test-present/tests-slider/NavSlideButton';

interface TestsSlider {
  testsList?: ITest[];
  title: string;
}

const TestsSlider: FC<TestsSlider> = ({ testsList, title }) => {
  if (!testsList) {
    return (
      <div className="grid grid-cols-4 gap-3 mt-4">
        <SkeletonLoader count={1} className="h-52" />
      </div>
    );
  }

  return (
    <div className={styles.testsSlider}>
      <h2 className={styles.title}>{title}</h2>
      <Swiper
        className={'py-4 px-12 '}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        modules={[Navigation]}
      >
        {testsList.map((test) => (
          <SwiperSlide key={test._id} className={'h-auto'}>
            <TestPresentCard shadows={false} test={test} />
          </SwiperSlide>
        ))}
        <div className={'flex justify-center gap-3 mt-4'}>
          <NavSlideButton type={'prev'} />
          <NavSlideButton type={'next'} />
        </div>
      </Swiper>
    </div>
  );
};

export default TestsSlider;
