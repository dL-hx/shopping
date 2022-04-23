import { createAction } from 'redux-actions';

// 等价于 export const loadProducts = (payload)=> ({type:'load products', payload })
export const loadProducts = createAction('load products');

// 通过这个方法可以之间修改 products 的数据
export const saveProducts = createAction('save products');



