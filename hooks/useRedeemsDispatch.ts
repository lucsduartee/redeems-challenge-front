import { RedeemsDispatchContext } from '@/contexts/redeems-context';
import { useContext } from 'react';

const useRedeemsDispatch = () => {
  const dispatch = useContext(RedeemsDispatchContext);
  if (!dispatch) {
    throw new Error('RedeemsDispatchContext must be used within a RedeemsProvider');
  }
  return dispatch;
};

export default useRedeemsDispatch;
