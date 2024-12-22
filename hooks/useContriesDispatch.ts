import { CountriesDispatchContext } from '@/contexts/countries-context';
import { useContext } from 'react';

const useCountriesDispatch = () => {
  const dispatch = useContext(CountriesDispatchContext);
  if (!dispatch) {
    throw new Error('useCountriesDispatch must be used within a CountriesProvider');
  }
  return dispatch;
};

export default useCountriesDispatch;
