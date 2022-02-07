import React from 'react';
import { Text, Input, Grid, Button } from '../elements';

import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';

import {actionCreators as userActions} from "../redux/modules/user";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { emailCheck } from '../shared/emailCheck';
import { apiKey } from '../shared/firebase';
import { history } from '../redux/Store';

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

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

  // const is_login = useSelector((state) => state.user.is_login);
  // const { history } = props;

  // if (is_login) {
  //   return (
  //     //margin 왜 안먹냐 ?_?
  //     <Grid margin="200px 0px" padding="16px" center>
  //       <Text size="30px" bold>잠깐✋🏻</Text>
  //       <Text size="24px">로그인 했는디요!!</Text>
  //       <Button _onClick={()=>{history.replace('/')}} text="돌아가기"></Button>
  //     </Grid>
  //   )
  // }
  // // 로그인 한 상태로 /login 접근시 Main으로!
  // const is_login = useSelector((state) => state.user.is_login);
  // const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  // const is_session = sessionStorage.getItem(_session_key) ? true : false;

  // if (is_login && is_session) {
  //     alert("이미 로그인이 된 상태입니다!");
  //     history.replace('/');
  // }
  // 문제점!!!!!!! 로그인 완료시에도 alert 뜬다!!!!!!!

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
          _onClick={() => {
            login();
            history.replace('/')
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
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
