import React from 'react';
import { Grid, Text, Button } from '../elements/index';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

import { history } from '../redux/Store';
import { apiKey } from '../shared/firebase';

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  // 로그인 했을때 헤더
  if (is_login && is_session) {
    return (
      <>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text
              text="My Magazine"
              _onClick={() => {
                history.push('/')
                window.location.reload();
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
                dispatch(userActions.logoutFB());
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
              history.push('/')
              window.location.reload();
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