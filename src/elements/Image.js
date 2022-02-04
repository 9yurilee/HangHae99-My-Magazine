import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const { shape, src, size } = props;
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
  if (shape == 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles} />
      </AspectOutter>
    )
  }
  return <></>;
};

Image.defaultProps = {
  shape: 'circle',
  src: 'https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg',
  size: 36,
};

const ImageCircle = styled.div`
  // --size라는 변수가 생긴 것
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 4px;
`;

//늘리면 늘어나고, 줄이면 줄어들어야 한다(정해진 비율에 맞게) = padding 이용 + div를 2개 만듦
const AspectOutter = styled.div`
  width: 100%; //100%였는데 내가 80으로 줄였음
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%; //4:3 맞추기 위해
  overflow: hidden; //넘쳐나오는 애들 숨기기
  background-image: url('${(props) => props.src}');
  background-size: cover;
`;

export default Image;