import React from 'react';
import {Grid, Image, Text} from "../elements"

const Post = (props) => {
  return (
    <>
      <Grid padding="10px">
        <Grid is_flex>
          <Image shape="circle" src={props.src}></Image>
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text bold>좋아요 {props.like}개</Text>
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
  //게시물의 이미지
  image_url:
    'https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg',
  contents: '뚱랑이',
  insert_dt: '2022-02-04 16:20:00',
  like: '10',
};

export default Post;
