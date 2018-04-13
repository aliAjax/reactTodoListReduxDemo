import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
// import logger from "redux-logger";
import thunk from "redux-thunk";

// console.log(logger,thunk)
// import { addTodo,changeCompleted } from "./actions"
// redux-thunk实现异步action
// redux-logger是redux得日志中间件
const store = createStore(reducers,applyMiddleware(thunk))
export default store