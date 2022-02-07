import { createAction, handleActions } from "redux-actions";
import { produce } from 'immer';
import { firestore } from "../../shared/firebase";
import moment from 'moment';
import user from "./user";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

// reducer가 사용할 initialstate
const initialState = {
  list: [],
};

// 포스트 하나당 initialstate
const initialPost = {
    image_url:
      'https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg',
    contents: '',
    insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    // insert_dt: '2022-02-04 16:20:00',
    like: 0,
};

const addPostFB = (contents="") => {
  return function (dispatch, getState, {history}){
    const postDB = firestore.collection("post");

    const _user = getState().user.user;
    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile
    };
    const _post = {
      ...initialPost,
      // ...user_info, //강의자료에는 없는데 이렇게 해야 콘솔 찍힌다...
      contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss")
    };
    
    postDB.add({...user_info, ..._post}).then((doc) => {
      let post = {user_info, ..._post, id: doc.id};
      dispatch(addPost(post)); //강의자료에는 없지만, 강의에는 있다.. 또잉..
      history.replace('/');
  }).catch((err) => {
      console.log('post 작성 실패!', err);
  });
};
};

const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    postDB.get().then((docs) => {
      let post_list = [];

      docs.forEach((doc) => {

        let _post = {
          id: doc.id,
          ...doc.data()
        };
        let post = {
            id: doc.id,
            user_info: {
                user_name: _post.user_name,
                user_profile: _post.user_profile,
                user_id: _post.user_id,
            },
            contents: _post.contents,
            image_url: _post.image_url,
            comment_cnt: _post.comment_cnt,
            imsert_dt: _post.insert_dt
        }

        post_list.push(post);
      });

      console.log(post_list);

      dispatch(setPost(post_list));
    });
  };
};
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.post_list;
    }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {
      draft.list.unshift(action.payload.post);
    })
  }, initialState
);


const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB, 
};

export {actionCreators};