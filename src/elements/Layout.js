import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Grid, Text, Button, Image, Input } from '../elements';

import { history } from '../redux/Store';
import Write from '../pages/Write';

const Layout = (props) => {
  const dispatch = useDispatch();

  // const id = post_list.match.params.id;
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);
  // const post_idx = post_list.findIndex((p) => p.id === id);
  const [contents, setContents] = React.useState('');

  const changeContents = (e) => {
    setContents(e.target.value);
    console.log(e.target.value);
    const textvalue = e.target.value;
  };

  const { radio, value, type, _onChange } = props;

  React.useEffect(() => {

  })
  return (
    <React.Fragment>
      <DIV>
        <Text size="20" bold center style={{ border: 'none' }}>
          레이아웃 선택하기
        </Text>
      </DIV>
      {/* 1번째 레이아웃 */}
      <DIV>
        <input type="radio" name="radiobtn" value="ImageUp" /> 내용은 위쪽
        이미지는 아래쪽
        <Grid padding="15px">
          <Text>{contents}게시물 내용 들어갈 자리</Text>
          {/* 수정 화면 미리보기엔 {post_list[0].contents} */}
          {/* input 안에 들어있던 값 받아오기 */}
        </Grid>
        <Grid>
          <Image
            shape="rectangle"
            src={
              preview
                ? preview
                : 'https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg'
            }
          />
        </Grid>
      </DIV>
      {/* 2번째 레이아웃 */}
      <DIV>
        <input type="radio" name="radiobtn" value="ImageLeft" /> 내용은 왼쪽
        이미지는 오른쪽
        <Grid padding="15px">
          <Grid is_flex center margin="auto">
            <Text>게시물 내용 들어갈 자리</Text>
            <Image
              shape="rectangle"
              src={
                preview
                  ? preview
                  : 'https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg'
              }
            />
          </Grid>
        </Grid>
      </DIV>
      '{/* 3번째 레이아웃 */}
      <DIV>
        <input type="radio" name="radiobtn" value="ImageRight" /> 내용은 오른쪽
        이미지는 왼쪽
        <Grid padding="15px">
          <Grid is_flex>
            <Image
              shape="rectangle"
              src={
                preview
                  ? preview
                  : 'https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg'
              }
            />
            <Text>게시물 내용 들어갈 자리</Text>
          </Grid>
        </Grid>
      </DIV>
    </React.Fragment>
  );
};

Layout.defaultProps = {
  value: '',
  radio: false,
  onSubmit: () => {},
  _onChange: () => {},
  shape: 'circle',
  src: 'https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg',
  size: 36,
  _onClick: () => {},
};

const DIV = styled.div`
  width: 800px;
  margin: auto;
  margin-bottom: 30px;
  align-items: center; //박스 내 중앙정렬 같은그
  text-align: center;
  vertical-align: middle;
  border: 1px solid #eee;
  border-radius: 15px;
  padding: 30px;
  margin-top: 15px;
`;

const Set = styled.div`
  background-color: green;
  min-width: 450px;
  height: 60vh;
  padding-left: 10px;
  padding-right: 10px;
  overflow: hidden;
`;

const Content = styled.div`
  text-align: left;
`;

const Photo = styled.div`
  width: 100%;
  height: 70%;
  background-color: cornsilk;
  background-image: url('https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Set2 = styled.div`
  background-color: beige;
`;

export default Layout;
