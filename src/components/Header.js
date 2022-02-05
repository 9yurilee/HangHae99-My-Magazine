import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Grid, Text, Button } from '../elements';
import { getCookie, deleteCookie } from '../shared/Cookie';

//redux hook: store에 있는 값 가져와서 쓸 수 있게
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActionss } from '../redux/modules/user';
import { useHistory } from 'react-router';

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLogin = useSelector((state)=> state.user.is_login)

  if (isLogin) {
    return (
      <>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text bold margin="0px" size="30px">
              My Magazine
            </Text>
          </Grid>
          <Grid is_flex>
            <Button
              text="로그아웃"
              _onClick={() => {
                dispatch(userActionss.logOut({}));
                // navigate('/');
              }}
            ></Button>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text bold margin="0px" size="30px">
            My Magazine
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
            }}
          ></Button>
          <Button
            text="회원가입"
            _onClick={() => {
              // navigate('/signup');
            }}
          ></Button>
        </Grid>
      </Grid>
    </>
  );
};

Header.defaultProps = {};

export default Header;

// 내가 한거
// const Header = (props) => {
//   return (
//     <div>
//       <HeaderWrap>My Magazine</HeaderWrap>
//       <Btns>sign in</Btns>
//       <Btns>sign up</Btns>
//     </div>
//   );
// };

// const HeaderWrap = styled.div`
//   z-index: -1;
//   font-size: 40px;
//   width: 100%;
//   height: 100px;
//   background-color: aliceblue;
//   display: flex;
//   position: fixed;
//   justify-content: center;
//   align-items: center;
// `;

// const Btns = styled.div`
//   z-index: 999;
//   font-size: 24px;
//   float: right;
//   display: inline-flex;
//   margin-top: 70px;
//   margin-right: 25px;
// `;

// export default Header;
