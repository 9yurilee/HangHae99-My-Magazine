import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { getCookie, setCookie, deleteCookie } from '../../shared/Cookie';

// InitialState
const initialState = {
  user: null,
  is_login: false,
};

//ACTION
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

//ACTION CREATOR
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

//MIDDLEWEAR
const loginAction = (user) => {
  return function(dispatch, getState, {history}){
    console.log(history)
    dispatch(logIn(user));
    history.push('/');
  }
}

//REDUCER
export default handleActions(
    {
      //produce (원본값, 원본값으로 하고싶은 일)
      [LOG_IN]: (state, action) => produce(state, (draft) => {
          setCookie("is_login", "success");
          draft.user = action.payload.user;
          // payload에 우리가 보낸 데이터가 담김
          draft.is_login = true;
        }),
        [LOG_OUT]: (state, action) => produce(state, (draft) => {
          deleteCookie("is_login");
          draft.user = null;
          draft.is_login = false;
        }),
      [GET_USER]: (state, action) => produce(state, (draft) => {}),
    },
    initialState,
    console.log("reducer~~~") 
  );

//ACTION CREATOR EXPORT
const actionCreators = {
  logIn,
  logOut,
  getUser,
  loginAction,
};

export { actionCreators };