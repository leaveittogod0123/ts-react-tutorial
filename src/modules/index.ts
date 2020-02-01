import { combineReducers } from 'redux';
import { shoppingcartReducer } from './shoppingcarts';

const rootReducer = combineReducers({
  shoppingcart: shoppingcartReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
