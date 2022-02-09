import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Button, Image, Input } from '../elements';
import { useSelector, useDispatch } from 'react-redux';

const Layout = (props) => {
  const { radio, value, type, _onChange } = props;
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);

  return (
    <React.Fragment>
      <DIV>
        <Text size="20" bold center style={{border: "none"}}>
          레이아웃 선택하기
        </Text>
      </DIV>
      {/* 1번째 레이아웃 */}
      <DIV>
        <input type="radio" name="radiobtn" value="ImageUp" /> 내용은 위쪽
        이미지는 아래쪽
        <Grid padding="15px">
          <Text>{props.contents}게시물 내용 들어갈 자리</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
      </DIV>
      {/* 2번째 레이아웃 */}
      <DIV>
        <input type="radio" name="radiobtn" value="ImageUp" /> 내용은 왼쪽
        이미지는 오른쪽
        <Grid padding="15px">
          <Grid is_flex center margin="auto">
            <Text>{props.contents}게시물 내용 들어갈 자리</Text>
            <Image shape="rectangle" src={props.image_url} />
          </Grid>
        </Grid>
      </DIV>
      '{/* 3번째 레이아웃 */}
      <DIV>
        <input type="radio" name="radiobtn" value="ImageUp" /> 내용은 오른쪽
        이미지는 왼쪽
        <Grid padding="15px">
          <Grid is_flex>
            <Image shape="rectangle" src={props.image_url} />
            <Text>{props.contents}게시물 내용 들어갈 자리</Text>
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
  width: 100%;
  height: 20%;
  background-color: coral;
  margin: 10px auto;
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
