import React, { createContext, ReactNode, useReducer } from 'react'

export interface ExtraQuestion {
  [x: number]: { answer: string }
}

export interface Item {
  [x: string]: { size_name: string; }  
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
  items?: Item
  extraQuestions?: ExtraQuestion;
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
  items: {},
  extraQuestions: {},
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
          extraQuestions: {
            ...(redeems?.extraQuestions ?? {}),            
              [action.data.extra_question_id]: {
                answer: action.data.answer
              },
          },
        }
      }
      if (action.field === 'items') {
        return {
          ...redeems,
          items: {
            ...(redeems?.items ?? {}),
            [action.data.customer_product_id]: {
              size_name: action.data.size_name,
            },
          }
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