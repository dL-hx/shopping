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




// saga文件默认要求: 导出一个generater函数
export default function* cartSagas() {
    // 接收action
    // 参数1:接收类型字符串
    yield takeEvery(cartSaga.loadCartList().type, getCartList);
  
  }