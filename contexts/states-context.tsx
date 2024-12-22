import React, { createContext, ReactNode, useReducer } from 'react'

export interface States {
  selectedState: string;
  states: Array<string>
}

export interface StateActions {
  type: string;
  data?: any;
}

interface StatesProviderProps {
  children: ReactNode;
}

export const StatesContext = createContext<States | undefined>(undefined)
export const StatesDispatchContext = createContext<React.Dispatch<StateActions> | undefined>(undefined)

const initialStates = {
  selectedState: '',
  states: [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 
    'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 
    'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
  ],
};

function statesReducer(
  states: States,
  action: StateActions
): States {
  switch (action.type) {
    case 'changed': {
      if (states.states.includes(action.data.state)) {
        return {
          states: [...states.states,],
          selectedState: action.data.country,
        }
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function StatesProvider({ children }: StatesProviderProps) {
  const [countries, dispatch] = useReducer(
    statesReducer,
    initialStates,
  );

  return (
    <StatesContext.Provider value={countries}>
      <StatesDispatchContext.Provider value={dispatch}>
        { children }
      </StatesDispatchContext.Provider>
    </StatesContext.Provider>
  )
}
