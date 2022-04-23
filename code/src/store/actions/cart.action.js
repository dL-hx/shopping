
import { createAction } from 'redux-actions';

// 等价于 export const loadCartList = (payload)=> ({type:'load cart list', payload })
export const loadCartList = createAction('load cart list');

// 通过这个方法可以之间修改 cart 的数据
export const saveCartList = createAction('save cart list');

