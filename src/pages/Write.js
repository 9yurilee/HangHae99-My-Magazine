import React from "react";
import {Grid, Text, Button, Image, Input} from "../elements";
import Upload from "../shared/Upload";
import { useSelector, useDispatch } from "react-redux"; 
import { history } from '../redux/Store';

const Write = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const { history } = props;

  if (!is_login) {
    return (
      //margin 왜 안먹냐 ?_?
      <Grid margin="200px 0px" padding="16px" center>
        <Text size="30px" bold>잠깐✋🏻</Text>
        <Text size="24px">로그인 후에만 글 작성이 가능합니다!</Text>
        <Button _onClick={()=>{history.replace('/login')}} text="로그인 하러가기"></Button>
      </Grid>
    )
  }
    return (
      <>
        <Grid padding="16px">
          <Text margin="0px" size="36px" bold>
            게시글 작성
          </Text>
          <Upload/>
        </Grid>

        <Grid>
          <Grid padding="16px">
            <Text margin="0px" size="24px" bold>
              미리보기
            </Text>
          </Grid>

          <Image shape="rectangle" />
        </Grid>

        <Grid padding="16px">
          <Input label="게시글 내용" placeholder="게시글 작성" multiLine />
        </Grid>

        <Grid padding="16px">
          <Button text="게시글 작성"></Button>
        </Grid>
      </>
    );
}

export default Write;