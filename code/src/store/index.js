import { createStore , applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

// import reducer from './reducers/counter.reducer'
// 改为合并后的reducers
import RootReducer from './reducers/root.reducer'


// import counterSaga from './sagas/counter.saga';

import rootSaga from './sagas/root.saga';


// 创建sagaMiddleware,创建中间件
const sagaMiddleware = createSagaMiddleware()

// 注册redux-saga
export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));


// 启动counterSaga, 这样才会加入redux工作流中
// sagaMiddleware.run(counterSaga)
sagaMiddleware.run(rootSaga)