import React from "react";
import { Grid, Text, Input, Button } from "../elements";

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from "../redux/modules/user";
import { signupFB } from "../redux/modules/user"
import { emailCheck } from '../shared/emailCheck';


  const SignUp = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [pw_check, setPwCheck] = React.useState("");
  const [user_name, setUserName] = React.useState('');

  const signup = () => { 
    if (id === "" || pw === "" || user_name === "") {
      window.alert('빈 칸을 채워주세요!');
      return;
    }
    if(!emailCheck(id)){
      window.alert('아이디는 이메일 형식으로 입력해주세요');
      return;
    }
    if (pw !== pw_check) {
      window.alert('비밀번호가 일치하지 않습니다. 비밀번호를 확인해주세요');
      return; //실행 안한다는 뜻
    }

    dispatch(userActions.signUpFB(id, pw, user_name));
    history.replace('/');
    window.alert(`반갑습니다 ${user_name}님🥰 회원가입이 완료되었습니다!`);
    };

    const is_login = useSelector((state) => state.user.is_login);
    const { history } = props;
  
    if (is_login) {
      return (
        <Grid padding="16px" center>
          <Text size="30px" bold>잠깐✋🏻</Text>
          <Text size="24px">새로운 회원가입은 로그아웃 후 진행해주세요!</Text>
          <Button _onClick={()=>{history.replace('/')}} text="돌아가기"></Button>
        </Grid>
      )
    }
   
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          회원가입
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwCheck(e.target.value);
            }}
          />
        </Grid>

        <Button
        text="회원가입하기"
        _onClick={signup}
        />
      </Grid>
    </React.Fragment>
  );
};

SignUp.defaultProps = {};

export default SignUp;