import React from 'react';
import { Grid, Image, Text, Button } from '../elements';
import { history } from '../redux/Store';
import { firestore } from '../shared/firebase';

import Write from '../pages/Write';

const Post = (props) => {
  const { user_info, image_url, contents, insert_dt, id, layout } = props;

  const onDelete = async () => {
    const ok = window.confirm('정말로 게시물을 삭제하시겠어요?');
    if (ok) {
      await firestore
        .collection('post')
        .doc(`${props.id}`)
        .delete()
        .then(() => {
          window.alert('삭제가 완료되었습니다');
          window.location.replace('/');
        })
        .catch((error) => {
          console.error('삭제 중 에러', error);
          window.alert('삭제 중 에러가 발생했습니다');
        });
    } else {
      return;
    }
  };

  return (
    <>
      <Grid padding="10px 50px">
        <Grid is_flex>
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            {props.is_me && (
              <>
                <Button
                  text="수정"
                  width="auto"
                  padding="4px"
                  margin="4px"
                  _onClick={() => {
                    history.push(`/write/${props.id}`);
                  }}
                />
                <Button
                  text="삭제"
                  width="auto"
                  padding="4px"
                  margin="4px"
                  _onClick={onDelete}
                />
              </>
            )}
            <Text>{props.insert_dt}</Text>
          </Grid>
        </Grid>
        {/* 여기다가 복붙 */}
        <>
              <Grid padding="5px">
                <Text>{props.contents}</Text>
              </Grid>
              <Grid>
                <Image
                  shape="rectangle"
                  src={props.image_url}
                  _onClick={() => {
                    history.push(`/detail/${props.id}`);
                  }}
                />
              </Grid>
          </>
        ;
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
  image_url: 'http://www.ipon.co.kr/common/img/default_profile.png',
  contents: '기본',
  insert_dt: '2022-02-04 16:20:00',
  like: '0',
};

export default Post;
