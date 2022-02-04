import React from "react";
import { Grid, Text, Input, Button } from "../elements";
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from "react-router";

const SignUp = (props) => {
  const navigate = useNavigate();

  // const signUpBtn = () => {
  //   const history = useNavigate();
  //   const dispatch = useDispatch();
  
  //   const idInput = React.useRef('');
  //   const nicknameInput = React.useRef('');
  //   const pwInput = React.useRef('');
  //   const re_pwInput = React.useRef('');

  //   dispatch(
  //     createIDFB({
  //       id: idInput.current.value,
  //       nickname: nicknameInput.current.value,
  //       pw: pwInput.current.value,
  //       re_pw: re_pwInput.current.value,
  //     })
  //   );
  //   history.push('/');
  // };

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
            _onChange={() => {
              console.log("!!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            _onChange={() => {
              console.log("!!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            _onChange={() => {
              console.log("!!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={() => {
              console.log("!!");
            }}
          />
        </Grid>

        <Button
        text="회원가입하기"
        _onClick={() => {
          navigate('/')
          alert("회원가입이 완료되었습니다")
        }}
        >
        </Button>
        {/* onClick={signUpBtn} */}
      </Grid>
    </React.Fragment>
  );
};

SignUp.defaultProps = {};

export default SignUp;