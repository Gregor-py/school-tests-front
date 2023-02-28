import { FC } from 'react';
import { useSwiper } from 'swiper/react';
import classNames from 'classnames';
import styles from '@/ui/test-present/TestPresent.module.scss';
import { MaterialIcon } from '@/ui/icons/MaterialIcon';

interface NavSlideButton {
  type: 'next' | 'prev';
}

const NavSlideButton: FC<NavSlideButton> = ({ type }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (type === 'next') {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  };

  return (
    <button
      className={classNames(styles.navButton, {
        'bg-amber-400': type === 'prev',
        'rotate-180 bg-primary': type === 'next'
      })}
      onClick={handleClick}
    >
      <MaterialIcon name={'MdArrowBack'} />
    </button>
  );
};

export default NavSlideButton;
