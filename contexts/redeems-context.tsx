import React, { createContext, ReactNode, useReducer } from 'react'

export interface ExtraQuestion {
  extraQuestionId: number;
  answer: string;
}

export interface Item {
  customerProductId: number;
  sizeName: string;
}

export interface Redeems {
  name: string;
  cpf: string;
  email: string;
  cep: string;
  street: string;
  adressNumber: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  size: string;
  items?: Array<Item>
  extraQuestions?: Array<ExtraQuestion>;
}

export interface RedeemActions {
  type: string;
  data?: any;
  field: string;
}

interface RedeemProviderProps {
  children: ReactNode;
}


export const RedeemsContext = createContext<Redeems | null>(null)
export const RedeemsDispatchContext = createContext<React.Dispatch<RedeemActions> | undefined>(undefined)

const initialRedeems = {
  name: '',
  cpf: '',
  email: '',
  cep: '',
  street: '',
  adressNumber: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
  country: '',
  size: '',
  items: [],
  extraQuestions: [],
};

function redeemsReducer(
  redeems: Redeems,
  action: RedeemActions
): Redeems {
  switch (action.type) {
    case 'updated': {
      if (action.field === 'extraQuestions') {
        return {
          ...redeems,
          extraQuestions: [
            ...(redeems?.extraQuestions ?? []),
            action.data,
          ],
        }
      }
      if (action.data.field === 'items') {
        return {
          ...redeems,
          items: [
            ...(redeems?.items ?? []),
            action.data,
          ],
        }
      }

      return {
        ...redeems,
        [action.field]: action.data[action.field], 
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function RedeemsProvider({ children }: RedeemProviderProps) {
  const [redeems, dispatch] = useReducer(
    redeemsReducer,
    initialRedeems,
  );

  return (
    <RedeemsContext.Provider value={redeems}>
      <RedeemsDispatchContext.Provider value={dispatch}>
        { children }
      </RedeemsDispatchContext.Provider>
    </RedeemsContext.Provider>
  )
}