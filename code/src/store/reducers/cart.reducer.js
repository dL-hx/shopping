import { handleActions as createReducer } from "redux-actions";
import {
  saveCartList,
  changeCartNumListClick,
  changeCartNumListLocal,
  delCartItemLocal,
} from "../actions/cart.action";

const initialState = { cartList: [] };

const cartReducer = createReducer(
  {
    // 更新购物车中的数据
    [delCartItemLocal]: (state, actions) => {
      // 将原有的购物车数据拷贝一份
      const newCartList = JSON.parse(JSON.stringify(state.cartList));
      // 返回删除的索引
      newCartList.splice(actions.payload, 1);
      return {
        ...state,
        cartList: newCartList,
      };;
    },
    // 更新购物车中商品的数量
    [changeCartNumListLocal]: (state, actions) => {
      const currentCartItem = actions.payload; // 当前的商品数量

      // 将原有的购物车数据拷贝一份
      const newCartList = JSON.parse(JSON.stringify(state.cartList));

      let idx = newCartList.findIndex((item) => item.id === currentCartItem.id);

      newCartList[idx] = currentCartItem;

      return {
        ...state,
        cartList: newCartList,
      };
    },

    // 增加商品数量
    [changeCartNumListClick]: (state, actions) => {
      const currentCartItem = actions.payload; // 当前的商品数量
      console.log("currentCartItem", currentCartItem);

      // 1. 没有商品之间添加

      // 2. 有商品数量增加

      const newCartList = JSON.parse(JSON.stringify(state.cartList));

      let idx = newCartList.findIndex((item) => item.id === currentCartItem.id);

      const hasCart = idx !== -1; // 存在

      if (hasCart) {
        // 商品已经存在于购物车中
        newCartList[idx].count = parseInt(newCartList[idx].count + 1);
      } else {
        // 商品没有在购物车中
        newCartList.push(currentCartItem);
      }
      return {
        ...state,
        cartList: newCartList,
      };
    },

    [saveCartList]: (state, actions) => ({
      ...state,
      cartList: actions.payload,
    }),
  },
  initialState
);
export default cartReducer;
