import { StatesDispatchContext } from '@/contexts/states-context';
import { useContext } from 'react';

const useStatesDispatch = () => {
  const dispatch = useContext(StatesDispatchContext);
  if (!dispatch) {
    throw new Error('useStatesDispatch must be used within a StatesProvider');
  }
  return dispatch;
};

export default useStatesDispatch;
