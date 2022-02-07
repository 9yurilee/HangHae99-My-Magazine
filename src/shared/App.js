import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { Main, Login, SignUp, Write, Detail, Edit } from '../pages/PagesIndex'; //강의 내 postlist = 나의 Main
import Permit from './Permit';
import Header from '../components/Header';

import { history } from '../redux/Store';
import { Button, Grid } from '../elements';
import { actionCreators as userActions } from '../redux/modules/user';
import { apiKey } from './firebase';

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <>
      <Grid>
          <Header />
        <ConnectedRouter history={history}>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/write" component={Write} />
          <Route path="/detail" component={Detail} />
          <Route path="/edit" component={Edit} />
        </ConnectedRouter>
      </Grid>
      {/* 여기서 하면 사방팔방 다 뜸 */}
      {/* <Permit>
        <Button is_float text="+" _onClick={() => (
          history.push('/write')
        )} />
      </Permit> */}
    </>
  );
}

export default App;
