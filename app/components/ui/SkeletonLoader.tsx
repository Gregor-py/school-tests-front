import { FC } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import classNames from 'classnames';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
  return <Skeleton {...rest} className={classNames('rounded-lg', className)} />;
};

export default SkeletonLoader;
