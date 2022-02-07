import { createAction, handleActions } from "redux-actions";
import { produce } from 'immer';

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
  id: 0,
  user_info: {
    user_name: 'name',
    user_profile: 'http://www.ipon.co.kr/common/img/default_profile.png',
  },
    image_url:
      'https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg',
    contents: '뚱랑이',
    insert_dt: '2022-02-04 16:20:00',
    like: '10',
};

export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),
    [ADD_POST]: (state, action) => produce(state, (draft) => {})
  }, initialState
);


const actionCreators = {
  setPost,
  addPost,
};

export {actionCreators};