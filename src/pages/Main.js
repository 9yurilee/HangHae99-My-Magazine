import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Post from '../components/Post';
import Permit from '../shared/Permit';
import { Button } from '../elements';
import { history } from '../redux/Store';
import { actionCreators as postActions } from '../redux/modules/post';
import Grid from '../elements/Grid';

const Main = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);

  const { history } = props;

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB()); //메인 페이지 들어오는 순간 포스트 불러오는 중(getPostFB)
    }
  }, []);

  return (
    <>
      <Grid>
        {post_list.map((post, idx) => {
          if (user_info && post.user_info.user_id === user_info.uid) { //user_info?로 되어있다..?
            return (
              <Grid
                key={post.id}
                _onClick={() => {
                  history.push(`/detail/${post.id}`);
                }}
              >
                <Post key={post.id} {...post} is_me />;
              </Grid>
            );
          } else {
            return (
              <Grid
                key={post.id}
                _onClick={() => {
                  history.push(`/detail/${post.id}`);
                }}
              >
                <Post {...post} />;
              </Grid>
            );
          }
        })}
        <Permit>
          <Button is_float text="+" _onClick={() => history.push('/write')} />
        </Permit>
      </Grid>
    </>
  );
};
export default Main;
