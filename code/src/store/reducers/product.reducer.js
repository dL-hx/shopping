import { handleActions as createReducer } from "redux-actions";

import { loadProducts, saveProducts } from "../actions/product.action";

const initialState = { product: [] };

const productReducer = createReducer(
  {
    [saveProducts]: (state, actions) => ({
      ...state,
      product:actions.payload
    }),
  },
  initialState
);

export default productReducer;
