import React from 'react';
import { Grid, Image, Text, Button } from '../elements';
import { history } from '../redux/Store';

const Post = (props) => {
  return (
    <>
      <Grid padding="10px 50px">
        <Grid is_flex>
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <Button
                text="수정"
                width="auto"
                padding="4px"
                margin="4px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              />
            )}
          </Grid>
        </Grid>
        <Grid padding="5px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            좋아요 {props.like}개
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

//props가 없어서 나는 오류가 없게끔 미리 설정 (initialstate랑 비슷)
Post.defaultProps = {
  user_info: {
    user_name: 'name',
    user_profile: 'http://www.ipon.co.kr/common/img/default_profile.png',
  },
  image_url:
    'https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg',
  contents: '뚱랑이',
  insert_dt: '2022-02-04 16:20:00',
  like: '0',
};

export default Post;
