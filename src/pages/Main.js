import React from "react";

import Post from '../components/Post';
import Permit from '../shared/Permit';
import { Button } from '../elements';
import { history } from '../redux/Store';
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Main = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list)

  React.useEffect(() => {
    if(post_list.length === 0){
      dispatch(postActions.getPostFB()); //메인 페이지 들어오는 순간 포스트 불러오는 중
    }
  }, []);

  return (
    <div> 
      {/* <Post /> */}
      {post_list.map((p, idx) => {
        return <Post key={p.id} {...p} />
      })}
      <Permit>
        <Button is_float text="+" _onClick={() => (
          history.push('/write')
        )} />
      </Permit>
    </div>
  )
}
export default Main;