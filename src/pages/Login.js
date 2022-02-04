import React from "react";
import { useNavigate } from "react-router";
import { Text, Input, Grid, Button } from "../elements";

const Login = (props) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            //입력하면 바로 console 찍힌다
            _onChange={() => {
              console.log("아이디 입력했어!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            _onChange={() => {
              console.log("패스워드 입력했어!");
            }}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인 했어!");
            navigate('/')
            alert("로그인 완료되었습니다")
          }}
        ></Button>

        <Grid>
          <Text size="15px" color="dimgray">아직 회원이 아니신가요?</Text>
        </Grid>
        <Button
          text="회원가입하기"
          _onClick={() => {
            console.log("로그인 했어!");
            navigate('/signup')
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;