import { createAction } from 'redux-actions';

// 等价于 export const loadProducts = (payload)=> ({type:'load products', payload })
export const loadProducts = createAction('load products');

export const saveProducts = createAction('save products');
