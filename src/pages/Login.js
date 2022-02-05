import React from 'react';
import { useHistory } from 'react-router';
import { Text, Input, Grid, Button } from '../elements';
import Header from "../components/Header";
import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';

import user, {actionCreators as userActions} from "../redux/modules/user";
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

  const login = () => {
    if(id === "" || pw === ""){
      window.alert("아이디 혹은 비밀번호를 입력해주세요,")
      return;
    }
    dispatch(userActions.loginFB(id, pw));
    console.log(dispatch)
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
              console.log(e.target.value)
            }}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            login();
            console.log('로그인 했어!');
            console.log(id, pw)

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

            // navigate('/signup');
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
