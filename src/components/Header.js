import React from 'react';
import { Grid, Text, Button } from '../elements/index';
import { getCookie, deleteCookie } from '../shared/Cookie';

//redux hook: store에 있는 값 가져와서 쓸 수 있게
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActionss } from '../redux/modules/user';

import { history } from '../redux/Store';
import { apiKey } from '../shared/firebase';
import { useHistory } from 'react-router';

// import Permit from '../shared/Permit';

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  console.log(is_session);

  // 로그인 했을때 헤더
  if (is_login && is_session) {
    return (
      <>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text
              text="My Magazine"
              _onClick={() => {
                window.location.replace('/');
              }}
              bold
              margin="auto"
              size="30px"
            />
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

  return (
    <div>
      {/* 로그인 안했을 때  헤더 */}
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text
            text="My Magazine"
            _onClick={() => {
              window.location.replace('/');
            }}
            bold
            margin="auto"
            size="30px"
          />
        </Grid>
        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
              history.push('/login');
            }}
          ></Button>
          <Button
            text="회원가입"
            _onClick={() => {
              history.push('/signup');
            }}
          ></Button>
        </Grid>
      </Grid>
    </div>
  );
};

Header.defaultProps = {};

export default Header;
