import React from "react";

import Post from '../components/Post';
import Permit from '../shared/Permit';
import { Button } from '../elements';
import { history } from '../redux/Store';

const Main = (props) => {
  return (
    <div>
      <Post />
      <Permit>
        <Button is_float text="+" _onClick={() => (
          history.push('/write')
        )} />
      </Permit>
    </div>
  )
}
export default Main;