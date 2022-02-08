import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const { is_flex, width, padding, margin, bg, children, center, _onClick} = props;
  //children이 스타일을 담당하는 애가 아니라서 styles를 따로 선언..?
  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
  };
  return(
  <div>
    <GridBox onClick={_onClick} {...styles}>{children}</GridBox>
    {/* 여기 원래 ...props 였음 */}
    {/* 자식 객체를 넣는다..? */}
  </div>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: '100%',
  padding: false,
  margin: false,
  bg: false,
  center: false,
  _onClick: ()=>{}
};

const GridBox = styled.div`
  //props를 가져오는 것. props의 width 가져올거야
  width: ${(props) => props.width};
  height: 100%;
  // 넓이에 패딩과 선굵기 포함할래?
  box-sizing: border-box;
  //있을 수도 있고, 없을 수도 있는(????) 애들의 값을 설정할 때
  // padding 있을 때 props의 패딩값을 따르고, 없으면 안준다
  ${(props)=> props.padding ? `padding: ${props.padding}`: ""}
  ${(props)=> props.margin ? `margin: ${props.margin}`: ""};
  ${(props)=> props.bg ? `background-color: ${props.bg}`: ""};
  //양 옆으로 흩어져있는 것 : justify-contents: space-between!
  ${(props) => props.is_flex? `display: flex; align-items: center; justify-content: space-between; margin-right: 60px;`
      : ""}
  ${(props) => props.center? `text-align: center` : ""}
`;

export default Grid;
