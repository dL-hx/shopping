import { all } from "redux-saga/effects"; // 引入all方法

import productSaga from "./product.saga";
import cartSaga from "./cart.saga";

// saga文件默认要求: 导出一个generater函数
// 通过all方法导出saga文件
export default function* rootSaga() {
  yield all([productSaga(), cartSaga()]);
}