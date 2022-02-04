import React from 'react';
import styled from 'styled-components';
import {Grid, Text, Button} from "../elements";

const Header = (props) => {
  return (
      <React.Fragment>
          <Grid is_flex padding="4px 16px">
              <Grid>
                  <Text margin="0px"size="30px" bold>My Magazine</Text>
              </Grid>
              
              <Grid is_flex>
                  <Button text="로그인"></Button>
                  <Button text="회원가입"></Button>
              </Grid>
          </Grid>
      </React.Fragment>
  )
}

Header.defaultProps = {}

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