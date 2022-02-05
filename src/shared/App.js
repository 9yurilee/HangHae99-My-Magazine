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

function App() {
  return (
    <>
      <Grid>
        <Header />
        <ConnectedRouter history={history}>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={SignUp} />
          <Route path="/write" component={Write} />
          <Route path="/detail" component={Detail} />
          <Route path="/edit" component={Edit} />
        </ConnectedRouter>
      </Grid>
    </>
  );
}

export default App;
