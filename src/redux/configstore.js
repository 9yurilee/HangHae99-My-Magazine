import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import user from './modules/user';


//✔️ reducer 만들때마다 넣어주기
const rootReducer = combineReducers({
  user: user,
});
console.log(combineReducers)

const middlewares = [thunk.withExtraArgument({})];
// 배열 안에 내가 사용할 미들웨어들 넣으면 됨
// console.log(middlewares)

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;
// console.log(env)

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === 'development') {
  const { logger } = require('redux-logger');
  //require : 패키지 가져올 때. 개발환경일때로 한정해서 사용하기때문에 임포트 굳이 안하고, if문 안에서만 사용하게끔
  middlewares.push(logger);
  // console.log(logger)
}


//✔️Devtools 사용
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
  console.log("devtool?")

//✔️미들웨어 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
console.log(enhancer)

//✔️스토어 만들기
let store = (initialStore) => createStore(rootReducer, enhancer);
console.log(store)

export default store();
