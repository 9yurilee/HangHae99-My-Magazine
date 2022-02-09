import React from 'react';
import { Grid, Text, Button, Image, Input, Layout } from '../elements';
import Upload from '../shared/Upload';

import { useSelector, useDispatch } from 'react-redux';
import { history } from '../redux/Store';
import { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as imageActions } from '../redux/modules/Image';
import styled from 'styled-components';

const Write = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);
  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;

  const { history } = props;

  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;
  const [contents, setContents] = React.useState(_post ? _post.contents : '');

  React.useEffect(() => {
    if (is_edit && !_post) {
      console.log('포스트 정보가 없어요!');
      history.goBack();

      return;
    }
    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image_url));
    }
  }, []);

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, { contents: contents }));
  };

  // 로그인 안하고 /write 접근 막기
  if (!is_login) {
    return (
      //margin 왜 안먹냐 ?_?
      <Grid margin="200px 0px" padding="16px" center>
        <Text size="30px" bold>
          잠깐✋🏻
        </Text>
        <Text size="24px">로그인 후에만 글 작성이 가능합니다!</Text>
        <Button
          _onClick={() => {
            history.replace('/login');
          }}
          text="로그인 하러가기"
        ></Button>
      </Grid>
    );
  }
  return (
    <>
      <Grid padding="25px">
        <Text margin="0px" size="36px" bold>
          {is_edit ? '게시글 수정' : '게시글 작성'}
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Layout></Layout>
        {/* <Image
          shape="rectangle"
          src={
            preview
              ? preview
              : 'https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg'
          }
        /> */}
      </Grid>

      <Grid padding="25px">
        <Text size="24px" margin="20px" bold text="게시물 내용" />
        <Input
          value={contents}
          _onChange={changeContents}
          placeholder="내용을 입력하세요"
          multiLine
        />
      </Grid>

      <Grid padding="25px">
        {is_edit ? (
          <Button text="게시글 수정" _onClick={editPost}></Button>
        ) : (
          <Button text="게시글 작성" _onClick={addPost}></Button>
        )}
      </Grid>
    </>
  );
};

export default Write;
