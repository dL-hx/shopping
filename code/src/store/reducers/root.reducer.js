// root reducer 用来reducer的合并
import { combineReducers } from 'redux'

//  1. 拆分reducer
import ProductReducer from './product.reducer'
import CartReducer from './cart.reducer'

 // 2. 合并reducer
 // {counter:{count:0}, model:{show:false}}
export default combineReducers({
    product: ProductReducer,
    cart: CartReducer,
})