import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ITest } from '@/shared/types/test.types';
import SkeletonLoader from '@/ui/SkeletonLoader';
import TestPresentCard from '@/ui/test-present/TestPresentCard';
import styles from '../TestPresent.module.scss';
import { Navigation } from 'swiper';
import NavSlideButton from '@/ui/test-present/tests-slider/NavSlideButton';
import ResultPresentCard from '@/ui/test-present/ResultPresentCard';

interface TestsSlider {
  testsList?: ITest[];
  title: string;
  type?: 'test' | 'result';
}

const TestsSlider: FC<TestsSlider> = ({ testsList, title, type = 'test' }) => {
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
            {type === 'test' ? (
              <TestPresentCard test={test} key={test._id} linkType={'present'} shadows={false} />
            ) : (
              <ResultPresentCard test={test} correctPercent={100} key={test._id} shadows={false} />
            )}
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
