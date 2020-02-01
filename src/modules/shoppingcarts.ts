export interface ShoppingCartProps {
  title: string;
  time: string;
  cost: number;
}

export interface ShoppingCartState {
  items: ShoppingCartProps[];
  totalCost: number;
  currentPage: string;
}

export const CHANGE_COST = 'shoppingcart/CHANGE_COST';
export const CHECK_SALON = 'shoppingcart/CHECK_SALON';
export const DONE_SALON = 'shoppingcart/DONE_SALON';
export const ADD_SALON = 'shoppingcart/ADD_SALON';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export interface ChangePage {
  type: typeof CHANGE_PAGE;
  meta: {
    currentPage: string;
  };
}

export interface AddSalon {
  type: typeof ADD_SALON;
  payload: ShoppingCartProps;
}

export function changePage(path: string) {
  return {
    type: CHANGE_PAGE,
    meta: {
      currentPage: path,
    },
  };
}

export function addSalon({ title, time, cost }: ShoppingCartProps) {
  return {
    type: ADD_SALON,
    payload: {
      title,
      time,
      cost,
    },
  };
}

export type ShoppingCartActionTypes = ChangePage | AddSalon;

const initialState: ShoppingCartState = {
  items: [],
  totalCost: 0,
  currentPage: '/',
};

export function shoppingcartReducer(
  state = initialState,
  action: ShoppingCartActionTypes,
): ShoppingCartState {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: state.currentPage,
      };

    default:
      return state;
  }
}
