
import { createAction } from 'redux-actions';

// 等价于 export const loadCartList = (payload)=> ({type:'load cart list', payload })
export const loadCartList = createAction('load cart list');

// 通过这个方法可以之间修改 cart 的数据
export const saveCartList = createAction('save cart list');


// 加入购物车
export const addCartListServer = createAction('addCartListServer');

// 更改商品数量
export const changeCartNumListClick = createAction('changeCartNumListClick');


// 更改购物车中的商品数量
export const addCartItemNumServer = createAction('addCartItemNumServer');

// 改变货物数量(修改本地数据)
export const changeCartNumListLocal = createAction('changeCartNumListLocal');


// 删除购物车商品

export const delCartItemServer = createAction('delCartItem');

// 改变删除后的CartList (修改本地数据)
export const delCartItemLocal = createAction('delCartItemLocal');










