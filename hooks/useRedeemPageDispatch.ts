import { RedeemPageDispatchContext } from '@/contexts/redeem-page-context'
import { useContext } from 'react'

const useRedeemPageDispatch = () => {
  const dispatch = useContext(RedeemPageDispatchContext);
  if (!dispatch) {
    throw new Error('RedeemPageDispatchContext must be used within a RedeemPageProvider');
  }
  return dispatch;
}

export default useRedeemPageDispatch;
