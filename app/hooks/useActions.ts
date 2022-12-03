import { useDispatch } from 'react-redux';
import { allActions } from '@/store/root-actions';
import { bindActionCreators } from 'redux';
import { useMemo } from 'react';

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
