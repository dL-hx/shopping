import { handleActions as createReducer } from "redux-actions";
import { saveCartList, } from "../actions/cart.action";


const initialState = { cartList: [] };

const cartReducer = createReducer(
  {
    [saveCartList]: (state, actions) => ({
      ...state,
      cartList:actions.payload
    }),
  },
  initialState
);
export default cartReducer