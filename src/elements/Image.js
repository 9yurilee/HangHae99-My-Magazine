import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const { shape, src, size, _onClick } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (shape === 'circle') {
    return (
      //속성이 styles?
      <ImageCircle {...styles}></ImageCircle>
    );
  }
  if (shape === 'rectangle') {
    return (
      <AspectOutter onClick={_onClick}>
        <AspectInner {...styles} />
      </AspectOutter>
    )
  }
  return (
  <>
     <ImageDefault {...styles} onClick={_onClick}></ImageDefault>
  </>);
};

Image.defaultProps = {
  shape: 'circle',
  src: 'https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg',
  size: 36,
  _onClick: () => {},
};

const ImageDefault = styled.div`
  // --size라는 변수가 생긴 것
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const ImageCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 2px 4px;
`;

//늘리면 늘어나고, 줄이면 줄어들어야 한다(정해진 비율에 맞게) = padding 이용 + div를 2개 만듦
const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
  overflow: hidden;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 70%;
  background-image: url('${(props) => props.src}');
  background-size: contain; 
  background-position: center;
  background-repeat: no-repeat;
  /* object-fit:cover; */ //없어도 될 듯..ㅎ
`;

export default Image;