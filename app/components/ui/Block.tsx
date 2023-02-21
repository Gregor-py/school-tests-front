import classNames from 'classnames';
import React, { FC, useState } from 'react';
import styles from './form-elements/edit-test-elements/EditTest.module.scss';

interface Block {
  children?: React.ReactNode;
  className?: string;
  full?: boolean;
}

const Block: FC<Block> = ({ children, className = '', full = false }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div
      className={classNames(
        'rounded-lg p-4 bg-white border border-gray-300 mx-auto',
        { 'max-w-3xl': !full },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Block;
