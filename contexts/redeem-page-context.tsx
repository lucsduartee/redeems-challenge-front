import React, { createContext, ReactNode, useReducer } from 'react'

export interface ExtraQuestion {
  id: number,
  question: string,
  answer_type: string,
  options: Array<string>
}

export interface Size {
  id: string;
  name: string;
}

export interface SizeGrid {
  name: string;
}

export interface Item {
  customer_product_id: string,
  sizes: Array<Size>,
  sizes_grid: SizeGrid,
}

export interface RedeemPage {
  id: string;
  extra_questions: Array<ExtraQuestion>;
  items: Array<Item>;
  status: string;
}

export interface RedeemPageActions {
  type: string;
  data?: any;
}

interface RedeemPageProviderProps {
  children: ReactNode;
}

export const RedeemPageContext = createContext<RedeemPage | null>(null)
export const RedeemPageDispatchContext = createContext<React.Dispatch<RedeemPageActions> | undefined>(undefined)

const initialRedeemPage = {
  id: '',
  status: '',
  items: [],
  extra_questions: [],
};

function redeemPageReducer(
  redeemPage: RedeemPage,
  action: RedeemPageActions
): RedeemPage {
  switch (action.type) {
    case 'saved': {
      return {
        ...redeemPage,
        id: action.data.redeemPage.id,
        status: action.data.redeemPage.status,
      }
    }
    case 'charged': {
      return {
        ...redeemPage,
        items: action.data.redeemPage.items,
        extra_questions: action.data.redeemPage.extra_questions,
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function RedeemPageProvider({ children }: RedeemPageProviderProps) {
  const [redeems, dispatch] = useReducer(
    redeemPageReducer,
    initialRedeemPage,
  );

  return (
    <RedeemPageContext.Provider value={redeems}>
      <RedeemPageDispatchContext.Provider value={dispatch}>
        { children }
      </RedeemPageDispatchContext.Provider>
    </RedeemPageContext.Provider>
  )
}