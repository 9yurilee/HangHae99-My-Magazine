import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { getCookie, setCookie, deleteCookie } from '../../shared/Cookie';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/app';

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
const loginFB = (id, pw) => {
  return function (dispatch, getState, { history }) {
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
      auth
        .signInWithEmailAndPassword(id, pw)
        .then((user) => {
 
          dispatch(
            setUser({
              user_name: user.user.displayName,
              id: id,
              user_profile: '',
              uid: user.user.uid   
            }),
          );
          history.replace('/')
          alert(`반갑습니다 ${user.user.displayName}님`)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorCode, errorMessage);
        });
    });
  };
};

const signUpFB = (id, pw, user_name) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pw)
      .then((user) => {
        auth.currentUser
          .updateProfile({
            displayName: user_name,
          })
          .then(() => {
            dispatch(
              setUser({ 
                user_name: user_name,
                id: id,
                user_profile: '',
                uid: user.user.uid 
              })
            );
          })
          .catch((error) => {
            window.alert("회원가입 중에 문제가 발생했어요🥲", error)
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
};

const loginCheckFB = () => {
  return function (dispatch, getState, {history}){
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatch(setUser({
          user_name: user.displayName,
          user_profile: '',
          id: user.email,
          uid: user.uid,
        }
        ))
      } else {
        dispatch(logOut());
      }
    })
  }
}

const logoutFB = () => {
  return function (dispatch, getState, {history}){
    auth.signOut().then(() => {
      dispatch(logOut());
      history.replace('/');
    })
  }
}

//REDUCER
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie('is_login', 'success');
        draft.user = action.payload.user;
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
  setUser,
  signUpFB,
  loginFB,
  loginCheckFB,
  logoutFB,
};

export { actionCreators };
