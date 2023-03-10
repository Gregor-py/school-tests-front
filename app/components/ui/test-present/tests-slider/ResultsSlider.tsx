import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ITest } from '@/shared/types/test.types';
import SkeletonLoader from '@/ui/SkeletonLoader';
import TestPresentCard from '@/ui/test-present/TestPresentCard';
import styles from '../TestPresent.module.scss';
import { Navigation } from 'swiper';
import NavSlideButton from '@/ui/test-present/tests-slider/NavSlideButton';
import ResultPresentCard from '@/ui/test-present/ResultPresentCard';

export interface IResult {
  test: ITest;
  correctPercent?: number;
  passingTestId: string;
}

interface TestsSlider {
  resultsList?: IResult[];
}

const ResultsSlider: FC<TestsSlider> = ({ resultsList }) => {
  if (!resultsList) {
    return (
      <div className="grid grid-cols-4 gap-3 mt-4">
        <SkeletonLoader count={1} className="h-52" />
      </div>
    );
  }

  return (
    <div className={styles.testsSlider}>
      <h2 className={styles.title}>{'Розпочаті тести'}</h2>
      <Swiper
        className={'py-4 px-12 '}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        modules={[Navigation]}
      >
        {resultsList.map((result) => (
          <SwiperSlide key={result.passingTestId} className={'h-auto'}>
            <ResultPresentCard
              test={result.test}
              correctPercent={result.correctPercent}
              shadows={false}
              passingTestId={result.passingTestId}
            />
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

export default ResultsSlider;
