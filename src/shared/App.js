import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/Store";
import { Grid } from '../elements';
import Header from '../components/Header';
//강의 내 postlist = 나의 Main
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Write from '../pages/Write';
import Detail from '../pages/Detail';
import Edit from '../pages/Edit';
import Permit from './Permit';

import { useDispatch } from 'react-redux';
import {actionCreators as userActions} from "../redux/modules/user"
import {apiKey} from './firebase'

function App() {
  const dispatch = useDispatch();

  //로그인여부 체크해서 로그인 유지
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    //didMount역할. login여부 체크
    if(is_session){
      dispatch(userActions.loginCheckFB());
    }
  },[])
  return (
    <>
      <Grid>
        <Header />
        <ConnectedRouter history={history}>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login}  />
          <Route path="/signup" component={SignUp} />
          <Route path="/write" component={Write} />
          <Route path="/detail" component={Detail} />
          <Route path="/edit" component={Edit} />
        </ConnectedRouter>
      </Grid>
      <Permit>
        <div style={{backgroundColor: "#888", width: "50px", height: "50px", borderRadius: "25px"}}>
          글쓰기
        </div>
      </Permit>
    </>
  );
}

export default App;
