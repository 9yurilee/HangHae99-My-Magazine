import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import user from './modules/user';
import Post from './modules/post';
import Image from './modules/Image';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  user: user,
  post: Post,
  image: Image,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({history: history})];
// 배열 안에 내가 사용할 미들웨어들 넣으면 됨

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
  console.log("로거얌")
}

//✔️Devtools 사용
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

//✔️미들웨어 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let mystore = (initialStore) => createStore(rootReducer, enhancer);

export default mystore();