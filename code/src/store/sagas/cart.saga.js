import { takeEvery, put, delay } from "redux-saga/effects"; // 引入两个异步方法
import axios from 'axios'
import * as cartSaga from "../actions/cart.action";

// saga文件参考
// https://blog.csdn.net/gercke/article/details/109910287?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.pc_relevant_default&utm_relevant_index=2

function* getCartList(action) {
    const res = yield axios.get("http://localhost:3005/cart");
    const cartlist = res.data;

    // 保存数据
    yield put(cartSaga.saveCartList(cartlist))
}


// 加入购物车
function* addCartList(action) {
    
    const res = yield axios.post("http://localhost:3005/cart/add", action.payload );

    const current = res.data;// 返回当前选中的商品

    // 修改商品数量
    yield put(cartSaga.changeCartNumListClick(current))
    
}


// 修改购物车中的商品数量
function* addCartItemNum(action) {
    
    const res = yield axios.put("http://localhost:3005/cart", action.payload );

    const current = res.data;// 返回当前选中的商品

    // 修改商品数量
    yield put(cartSaga.changeCartNumListLocal(current))
    
}




// 删除购物车中的商品
function* delCartItem(action) {
    
    const res = yield axios.delete("http://localhost:3005/cart/delete", {params: action.payload} );

    const data = res.data;

    // 修改商品数量
    yield put(cartSaga.delCartItemLocal(data))
    
}

// saga文件默认要求: 导出一个generater函数
export default function* cartSagas() {
    // 接收action
    // 参数1:接收类型字符串
    yield takeEvery(cartSaga.loadCartList, getCartList);

    // 加入购物车, (因为要调用接口,使用saga中间件)
    yield takeEvery(cartSaga.addCartListServer, addCartList);

    // 修改购物车中的商品数量
    yield takeEvery(cartSaga.addCartItemNumServer, addCartItemNum);


    // 删除商品
    yield takeEvery(cartSaga.delCartItemServer, delCartItem);

    
  
  }