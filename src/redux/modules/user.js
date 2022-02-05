import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { getCookie, setCookie, deleteCookie } from '../../shared/Cookie';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../shared/firebase';

//ACTION
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

//ACTION CREATOR
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// InitialState
const initialState = {
  user: null,
  is_login: false,
};

//MIDDLEWEAR
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    history.push('/');
  };
};

const signUpFB = (id, pw, user_name) => {
  return function (dispatch, getState, {history}){

    auth
      .createUserWithEmailAndPassword(id, pw)
      .then((user) => {

        console.log(user);
        
        auth.currentUser.updateProfile({
          displayName: user_name,
        }).then(()=>{
          dispatch(setUser({user_name: user_name, id: id, user_profile: ''}));
          history.push('/');
        }).catch((error) => {
          console.log(error);
        });

        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ..
      });

  }
}

//REDUCER
export default handleActions(
  {
    //produce (원본값, 원본값으로 하고싶은 일)
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie('is_login', 'success');
        draft.user = action.payload.user;
        // payload에 우리가 보낸 데이터가 담김
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie('is_login');
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState,
);

//ACTION CREATOR EXPORT
const actionCreators = {
  logOut,
  getUser,
  loginAction,
  signUpFB,
};

export { actionCreators };
