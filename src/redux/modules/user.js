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
              //uid=고유값
              uid: user.user.uid //안되면 userCredential.user.uid!!!       
            }),
          );
          // history.push('/');
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
        console.log(user);

        auth.currentUser
          .updateProfile({
            displayName: user_name,
            //then : 성공했을 때 들어오는 곳
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
            history.push('/');
            console.log(user.user.uid)
            //error 났을때
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ..
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
      //현재 페이지를 ()로 대체해서 뒤로 가기로 접근 불가
    })
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
  signUpFB,
  loginFB,
  loginCheckFB,
  logoutFB,
};

export { actionCreators };
