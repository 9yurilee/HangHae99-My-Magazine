import React from 'react';
import { useHistory } from 'react-router';
import { Text, Input, Grid, Button } from '../elements';
import Header from "../components/Header";
import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';

import {actionCreators as userActions} from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePw = (e) => {
    setPw(e.target.value);
  };
  console.log(getCookie('user_id'))

  const login = () => {
    dispatch(userActions.loginAction({user_name: "perl"}));
}
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            value={id}
            label="아이디"
            placeholder="아이디를 입력해주세요."
            //입력하면 바로 console 찍힌다
            _onChange={changeId}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            value={pw}
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            _onChange={changePw}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            login();
            // navigate('/');
            // alert("로그인 완료되었습니다")
          }}
        ></Button>

        <Grid>
          <Text size="15px" color="dimgray">
            아직 회원이 아니신가요?
          </Text>
        </Grid>
        <Button
          text="회원가입하기"
          _onClick={() => {
            console.log('로그인 했어!');
            // navigate('/signup');
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
