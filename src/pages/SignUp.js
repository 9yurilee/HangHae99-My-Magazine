import React from "react";
import { Grid, Text, Input, Button } from "../elements";

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from "../redux/modules/user";
import { signupFB } from "../redux/modules/user"

  const SignUp = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [pw_check, setPwCheck] = React.useState("");
  const [user_name, setUserName] = React.useState('');

  const signup = () => {
    if (id === "" || pw === "" || user_name === "") {
      return;
    }
    
    if (pw !== pw_check) {
      return; //실행 안한다는 뜻
    }

    dispatch(userActions.signUpFB(id, pw, user_name));
    };


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
        _onClick={
          signup()
          // alert("회원가입이 완료되었습니다");
        }
        />
      </Grid>
    </React.Fragment>
  );
};

SignUp.defaultProps = {};

export default SignUp;