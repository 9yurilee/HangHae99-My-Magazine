import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Grid, Text, Button } from '../elements';
import { getCookie, deleteCookie } from '../shared/Cookie';

//redux hook: store에 있는 값 가져와서 쓸 수 있게
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActionss } from '../redux/modules/user';
import { useHistory } from 'react-router';

import {apiKey} from "../shared/firebase"
import {history} from "../redux/Store"
import Permit from '../shared/Permit';

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state)=> state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  console.log(is_session);

  if (isLogin && is_session) {
    return (
       <>
    <Grid is_flex padding="4px 16px">
      <Grid>
        <Text bold margin="0px" size="30px">My Magazine</Text>
      </Grid>
      <Grid is_flex>
        <Button 
          text="로그아웃"
          _onClick={() => {
            dispatch(userActionss.logoutFB());
          }}
        />
      </Grid>
    </Grid>
    </>
    );
  }

  // <Permit>
  //   <>
  //   <Grid is_flex padding="4px 16px">
  //     <Grid>
  //       <Text bold margin="0px" size="30px">My Magazine</Text>
  //     </Grid>
  //     <Grid is_flex>
  //       <Button 
  //         text="로그아웃"
  //         _onClick={() => {
  //           dispatch(userActionss.logoutFB());
  //         }}
  //       />
  //     </Grid>
  //   </Grid>
  //   </>
  // </Permit>

  return (
    <>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text bold margin="0px" size="30px">
            My Magazine
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
              window.location.replace("/login")
            }}
          ></Button>
          <Button
            text="회원가입"
            _onClick={() => {
              window.location.replace("/signup");
            }}
          ></Button>
        </Grid>
      </Grid>
    </>
  );
};

Header.defaultProps = {};

export default Header;