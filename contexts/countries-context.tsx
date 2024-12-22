import React, { createContext, ReactNode, useReducer } from 'react'

export interface Countries {
  selectedCountry: string;
  countries: Array<string>
}

export interface CountryActions {
  type: string;
  data?: any;
}

interface CountriesProviderProps {
  children: ReactNode;
}

export const CountriesContext = createContext<Countries | null>(null)
export const CountriesDispatchContext = createContext<React.Dispatch<CountryActions> | undefined>(undefined)

const initialCountries = {
  selectedCountry: '',
  countries: ['Brasil', 'México', 'China', 'Bolívia'],
};

function countriesReducer(
  countries: Countries,
  action: CountryActions
): Countries {
  switch (action.type) {
    case 'changed': {
      if (countries.countries.includes(action.data.country)) {
        return {
          countries: [...countries.countries,],
          selectedCountry: action.data.country,
        }
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function CountriesProvider({ children }: CountriesProviderProps) {
  const [countries, dispatch] = useReducer(
    countriesReducer,
    initialCountries,
  );

  return (
    <CountriesContext.Provider value={countries}>
      <CountriesDispatchContext.Provider value={dispatch}>
        { children }
      </CountriesDispatchContext.Provider>
    </CountriesContext.Provider>
  )
}