import React from 'react';
import { Text, Input, Grid, Button } from '../elements';

import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';

import {actionCreators as userActions} from "../redux/modules/user";
import { useSelector, useDispatch } from 'react-redux';

import { emailCheck } from '../shared/emailCheck';
import { apiKey } from '../shared/firebase';
import { history } from '../redux/Store';

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');

  const login = () => {
    if(id === "" || pw === ""){
      window.alert("아이디 혹은 비밀번호를 입력해주세요,")
      return;
  }
  if(!emailCheck(id)){
    window.alert("아이디는 이메일 형식으로 입력해주세요");
    return;
  }
  dispatch(userActions.loginFB(id, pw));
  }

  const is_login = useSelector((state) => state.user.is_login);
  const { history } = props;

  if (is_login) {
    return (
      <Grid padding="16px" center>
        <Text size="30px" bold>잠깐✋🏻</Text>
        <Text size="24px">로그인이 되어있네요!</Text>
        <Button _onClick={()=>{history.replace('/')}} text="돌아가기"></Button>
      </Grid>
    )
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
            _onChange={(e) => {
              setId(e.target.value)
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            value={pw}
            label="패스워드"
            type="password"
            placeholder="패스워드 입력해주세요."
            _onChange={(e) => {
              setPw(e.target.value)
            }}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={login}
        ></Button>

        <Grid>
          <Text size="15px" color="dimgray">
            아직 회원이 아니신가요?
          </Text>
        </Grid>
        <Button
          text="회원가입하기"
          _onClick={() => {
            history.push('/signup')
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
